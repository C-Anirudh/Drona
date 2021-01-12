chrome.runtime.sendMessage({todo: "showPageAction"});

const api_url = 'http://127.0.0.1:5000/';

var element = `
<button title="I want to learn" type="button" id="drona-btn">
    <div style="overflow: hidden;">
        <p style="float: left; color:red;">&#968;</p>
        <p style="float: right;">DRONA</p>
    </div>
</button>
`

function addButton() {
    $("#top-level-buttons").append(element);

    $("#drona-btn").click(() => {
        let videoURL = window.location.href; // Returns full URL
        let params = (new URL(videoURL)).searchParams;
        let videoID = params.get("v");
        console.log(videoID);

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

/*
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    setTimeout(addButton, 7000);
    console.log("URL CHANGED: " + request.data.url); 
});
*/
//window.addEventListener('DOMContentLoaded', addButton);
window.addEventListener('yt-page-data-updated', addButton);