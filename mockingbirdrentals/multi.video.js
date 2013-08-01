// FIX TAGLINE PRICE FORMATTING

var tagline = document.getElementById('tagline');
if(tagline != null) {
    var priceWhole = tagline.firstElementChild.innerHTML.split(".")[0];
    tagline.firstElementChild.innerHTML = priceWhole;
}

// INSERT VIDEO TOURS WHEN AVAILABLE

var videoLinks = {
    'lil-ranch-cottage': 'http://www.youtube.com/embed/eJG7i2xzhtE?rel=0',
    'robson-house': 'http://www.youtube.com/embed/g5TzvQ0R-Uw?rel=0',
    'stone-mill-way': 'http://www.youtube.com/embed/N0KYx6dgo6s?rel=0'
};

var carousel = document.getElementById("property-carousel");
var video = document.createElement("div");
video.style.textAlign = "center";
var pathArray = window.location.href.split('/');
var propNamespace;

if(pathArray[pathArray.length - 1] != '')
    propNamespace = videoLinks[pathArray[pathArray.length - 1]];
else
    propNamespace = videoLinks[pathArray[pathArray.length - 2]];

if(typeof propNamespace !== "undefined") {
    var iFrame = document.createElement("iframe");
    iFrame.setAttribute("src", propNamespace);
    iFrame.setAttribute("allowfullscreen", "");
    iFrame.setAttribute("width", "560");
    iFrame.setAttribute("height", "315");
    iFrame.setAttribute("frameborder", "1");
    video.appendChild(iFrame);
    carousel.parentNode.insertBefore(video, carousel.nextSibling);
}
