function notifyContentPage(e) {
    browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs.length == 0) {
            console.log("could not send message to the current tab");
        } else {
            const sendingToContent = browser.tabs.sendMessage(tabs[0].id, {message: "summarize"});
            sendingToContent.then(handleResponse, handleError);
        }
    });
}

console.log("Hello World!", browser);
