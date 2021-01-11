chrome.runtime.sendMessage({todo: "showPageAction"});

const api_url = 'http://127.0.0.1:5000/';

var element = `
<button type="submit" id="drona-btn"> 
    &#968; DRONA
</button>
`

function addButton() {
    $("#top-level-buttons").append(element);

    $("#drona-btn").click(() => {
        var url = window.location.href; // Returns full URL
        console.log(url);
        fetch(api_url, {
            method: 'POST',
            body: JSON.stringify(url),
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