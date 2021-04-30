chrome.runtime.sendMessage({todo: "showPageAction"});

const api_url = 'http://127.0.0.1:5000/';

var element = `
<button title="I want to learn" id="drona-btn">
    <div style="overflow: hidden;">
        <img src="https://github.com/teknas07/Drona_aasets/blob/main/button.png?raw=true" height="35px" width="35px">
    </div>
</button>
`
var buttons = `
<div class="btn-group btn-group-toggle" data-toggle="buttons">
    <label class="btn btn-outline-primary" id="summary-btn" style="width:141px; height:43px;">
        <input type="radio" autocomplete="off"> Summary
    </label>
    <label class="btn btn-outline-primary" id="quiz-btn" style="width:141px; height:43px;">
        <input type="radio" autocomplete="off"> Quiz
    </label>
</div>
`

var summaryDisplay = `
<div class="card" id="summarydisplay" style="display:none;">
  <h5 class="card-header">A summary of the video:</h5>
  <div class="card-body">
    <p class="card-text" id="summaryContent">
        <div id="backimg">
        </div>        
    </p>
  </div>
</div>
`

var quizDisplay = `
<div class="card" id="quizdisplay" style="display:none;">
  <h5 class="card-header">Quiz questions to test your understanding of the video:</h5>
  <div class="card-body">
    <p class="card-text" id="quizContent">
        <div id="backimg">
        </div>        
    </p>
  </div>
</div>
`

var loader = `
<div class="container" id="loader">
    <br><br><br>
    <div class="flex">
    <ul class="loader">
        <li class="center"></li>
        <li class="item item-1"></li>
        <li class="item item-2"></li>
        <li class="item item-3"></li>
        <li class="item item-4"></li>
        <li class="item item-5"></li>
        <li class="item item-6"></li>
        <li class="item item-7"></li>
        <li class="item item-8"></li>
    </ul>
    </div>
    <div class="load-text">
        Loading Drona...
    </div>
</div>
`

function checkSummary() { 
    var x = document.getElementById("summarydisplay");
    if (x.style.display=="none"){
        x.style.display="block";    
    } else {
        x.style.display="none";
    }
}

function checkQuiz() { 
    var x = document.getElementById("quizdisplay");
    if (x.style.display=="none"){
        x.style.display="block";    
    } else {
        x.style.display="none";
    }
}

function addDronaButton() {
    $("#top-level-buttons").append(element);
    document.getElementById("drona-btn").disabled=false;
    $("#drona-btn").click(() => {
        document.getElementById("drona-btn").classList.add("drona-btn-clicked");
        document.getElementById("drona-btn").disabled=true;

        let videoURL = window.location.href; // Returns full URL
        let videoParams = (new URL(videoURL)).searchParams;
        let videoID = videoParams.get("v");
        console.log("ID of the YouTube video : " + videoID);
        let json_data;
        $("#meta-contents").append(loader);
        const request = async () => {
            const response = await fetch(api_url, {
                method: 'POST',
                body: JSON.stringify(videoID),
                headers:{
                'Content-Type': 'application/json'
                }});
            json_data = await response.json();
            console.log(json_data);
            document.getElementById("loader").style.display = "none";
            $("#meta-contents").append(buttons);
            $("#meta-contents").append(summaryDisplay);
            $("#meta-contents").append(quizDisplay);
            $("#summaryContent").append(json_data.summary);
            $("#quizContent").append(json_data.mcqs);

            $("#summary-btn").click(() => {
                document.getElementById("quizdisplay").style.display = "none";
                checkSummary();
            });
            $("#quiz-btn").click(() => {
                document.getElementById("summarydisplay").style.display = "none";
                checkQuiz();
            });
        }
        request();
    });
}

window.addEventListener('yt-page-data-updated', addDronaButton);