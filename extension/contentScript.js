chrome.runtime.sendMessage({todo: "showPageAction"});

var element = `
<button type="submit" id="drona-btn"> 
    &#968; DRONA
</button>
`

$(document).ready(() => {
    $("#top-level-buttons").append(element);

    $("#drona-btn").click(() => {
        var url = window.location.href; // Returns full URL
        alert(url);
    });
});

