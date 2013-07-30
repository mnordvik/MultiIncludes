/*var carousel = document.getElementById("property-carousel");*/
var carousel = document.getElementById("recommendationsInfoWindow");

var video = document.createElement("div");

var iframe = document.createElement("iframe");
/*iframe.setAttribute("src","http://www.visualtour.com/applets/flashviewer2/viewer.asp?t=1754762&sk=202");*/
iframe.setAttribute("src","http://www.google.com/");
iframe.setAttribute("scrolling","no");

video.appendChild("iframe");

carousel.parentNode.insertBefore(video, carousel.nextSibling);

