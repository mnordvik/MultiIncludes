var carousel = document.getElementById("property-carousel");

var video = document.createElement("div");

video.innerHTML = '<iframe src="http://www.aol.com"></iframe>';
/*var iframe = document.createElement("img");
iframe.setAttribute("src","http://www.visualtour.com/applets/flashviewer2/viewer.asp?t=1754762&sk=202");
iframe.setAttribute("scrolling","no");
video.appendChild("iframe");*/

carousel.parentNode.insertBefore(video, carousel.nextSibling);

