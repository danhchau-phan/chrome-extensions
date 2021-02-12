var gClasses = document.getElementsByClassName("g");
var i;
for (i=0;i<gClasses.length; i++) {    
    try {
        var href_ = gClasses[i].children[gClasses[i].children.length - 1]
                    .firstElementChild
                    .getElementsByTagName("a")[0].href;

        chrome.runtime.sendMessage({href: href_}, (response) => {
            if (response.bookmarked === true) {
                console.log(response.href);
            };
        });
        
    } catch (TypeError) {
        console.log(gClasses[i]);
    }
};