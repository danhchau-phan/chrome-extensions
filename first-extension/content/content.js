function isBookmarked() {
    
    return true;
}

var gClasses = document.getElementsByClassName("g")
var i;
for (i=0;i<gClasses.length; i++) {
    try {
        var href_ = gClasses[i].firstElementChild
            .firstElementChild
            .getElementsByTagName("a")[0].href;

        console.log(href_);
        if (isBookmarked(href_)) {
            console.log(href_);
        }
    } catch (TypeError) {}
}