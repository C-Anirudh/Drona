chrome.runtime.sendMessage({todo: "showPageAction"});

const api_url = 'http://127.0.0.1:5000/';

var element = `
<button title="I want to learn" id="drona-btn">
    <div style="overflow: hidden;">
        <img src="https://github.com/teknas07/Drona_aasets/blob/main/button.png?raw=true" height="35px" width="35px">
    </div>
</button>
`

var summary = `
<div id="summary-btn">
    <button id="button-suy" style="width:141px; height:43px;">Summary</button>
</div>
`

var quiz = `
<div id="quiz-btn">
    <button id="button-suy" style="width:141px; height:43px;">Quiz</button>
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
        document.getElementById("drona-btn").classList.add("ele-btn");
        document.getElementById("drona-btn").disabled=true;

        let videoURL = window.location.href; // Returns full URL
        let videoParams = (new URL(videoURL)).searchParams;
        let videoID = videoParams.get("v");
        console.log("ID of the YouTube video : " + videoID);
        let json_data;
        const request = async () => {
            const response = await fetch(api_url, {
                method: 'POST',
                body: JSON.stringify(videoID),
                headers:{
                'Content-Type': 'application/json'
                }});
            json_data = await response.json();
            console.log(json_data);
            
            console.log("Here: " + json_data);
            $("#meta-contents").append(summary);
            $("#meta-contents").append(quiz);
            $("#meta-contents").append(summaryDisplay);
            $("#meta-contents").append(quizDisplay);
            $("#summaryContent").append(json_data.summary);
            $("#quizContent").append(json_data.mcqs);
            $("#summary-btn").click(() => {
                document.getElementById("button-suy").classList.toggle("button");
                document.getElementById("quizdisplay").style.display = "none";
                checkSummary();
            });
            $("#quiz-btn").click(() => {
                document.getElementById("button-suy").classList.toggle("button");
                document.getElementById("summarydisplay").style.display = "none";
                checkQuiz();
            });
        }
        request();
    });
}

window.addEventListener('yt-page-data-updated', addDronaButton);