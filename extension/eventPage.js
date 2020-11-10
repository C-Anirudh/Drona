chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.todo == "showPageAction") {
        // retrieves all tabs
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.pageAction.show(tabs[0].id);
        });
    }
});