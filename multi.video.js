var carousel = document.getElementById("property-carousel");

var video = document.createElement("div");

var iframe = document.createElement("iframe");
iframe.setAttribute("src","http://www.visualtour.com/applets/flashviewer2/viewer.asp?t=1754762&sk=202");
iframe.setAttribute("scrolling","no");

video.appendChild("iframe");

carousel.parentNode.insertBefore(video, carousel.nextSibling);
