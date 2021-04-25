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

var summary = `
<div>
<h1 style="letter-spacing:3px; color:black; margin-bottom:5px;">Summary</h1>
</div>
`

function addDronaButton() {
    $("#top-level-buttons").append(element);
    $("#drona-btn").click(() => {
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
            let h = document.createElement("H4");
            let d = document.createTextNode(json_data);
            h.appendChild(d);
            $("#meta-contents").append(summary);
            h.style.letterSpacing="1.5px";
            h.style.lineHeight="1.6";
            h.style.fontSize="14px";
            h.style.border="2px solid black";
            h.style.padding="5px";
            $("#meta-contents").append(h);
        }
        request();
    });
}

window.addEventListener('yt-page-data-updated', addDronaButton);