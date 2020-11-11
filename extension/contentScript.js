chrome.runtime.sendMessage({todo: "showPageAction"});

const api_url = 'http://127.0.0.1:5000/';

var element = `
<button type="submit" id="drona-btn"> 
    &#968; DRONA
</button>
`

$(document).ready(() => {
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
});

