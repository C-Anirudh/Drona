chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.todo == "showPageAction") {
        // retrieves all tabs
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.pageAction.show(tabs[0].id);
        });
    }
});

/*
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo && changeInfo.status == "complete"){
        console.log("Tab updated: " + tab.url);
        chrome.tabs.sendMessage(tabId, {data: tab});
    }
});
*/