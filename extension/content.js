chrome.runtime.sendMessage({todo: "showPageAction"});

var element = `
<button style="border:none; background-color: transparent;" type="button"> 
    &#968; Drona
</button>
`

$(document).ready(function(){
    $("#top-level-buttons").append(element);
});
