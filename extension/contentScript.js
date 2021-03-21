chrome.runtime.sendMessage({todo: "showPageAction"});

const api_url = 'http://127.0.0.1:5000/';

var element = `
<button title="I want to learn" type="button" id="drona-btn">
    <div style="overflow: hidden;">
        <p style="float: left; color:red;">
            &#968;
        </p>
        <p style="float: right;">
            DRONA
        </p>
    </div>
</button>
`

function addDronaButton() {
    $("#top-level-buttons").append(element);
    $("#drona-btn").click(() => {
        let videoURL = window.location.href; // Returns full URL
        let videoParams = (new URL(videoURL)).searchParams;
        let videoID = videoParams.get("v");
        console.log("ID of the YouTube video : " + videoID);
    
        fetch(api_url, {
            method: 'POST',
            body: JSON.stringify(videoID),
            headers:{
            'Content-Type': 'application/json'
            } })
        .then(data => { return data.json() })
        .then(res => { 
            console.log(res);
        })
        .catch(error => console.error('Error:', error));
    });
}

window.addEventListener('yt-page-data-updated', addDronaButton);