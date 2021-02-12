chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    chrome.bookmarks.search(message.href, (result) => {
        if (result.length > 0) {
            sendResponse({href: message.href, bookmarked: true});
        } else {
            sendResponse({href: message.href, bookmarked: false});
        };
    });
    
    return true;
})

