browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});

import("https://cdn.skypack.dev/@mozilla/readability")
    .then((module) => {
        if (module.isProbablyReaderable(documentClone)) {
            console.log("Page is readable!");
            let article = new module.Readability(documentClone).parse();
        } else {
            console.log("Page is not readable!")
        }
    })
    .catch((error) => {
        console.log(error);
    });
