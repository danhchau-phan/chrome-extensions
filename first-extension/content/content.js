async function mark(element) {
    var img = document.createElement("img");
    img.src = await chrome.runtime.getURL("/images/icon.png");
    element.getElementsByTagName("h3")[0].appendChild(img);
}

var gClasses = document.getElementsByClassName("g");
var i;
for (i=0;i<gClasses.length; i++) {    
    try {
        var href_ = gClasses[i].children[gClasses[i].children.length - 1]
                    .firstElementChild
                    .getElementsByTagName("a")[0].href;

        chrome.runtime.sendMessage({href: href_, index: i}, (response) => {
            if (response.bookmarked === true) {
                console.log(response.href);
                mark(gClasses[response.index].children[gClasses[response.index].children.length - 1]
                    .firstElementChild
                    .getElementsByTagName("a")[0]);
            };
        });
        
    } catch (TypeError) {
        console.log(gClasses[i]);
    }
};