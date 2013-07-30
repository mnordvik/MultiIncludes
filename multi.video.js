var carousel = document.getElementById("property-carousel");

var video = document.createElement("div");

video.innerHTML = '<iframe src="http://www.aol.com" width="790" height="1024" frameborder="3"></iframe>';
/*var iframe = document.createElement("img");
iframe.setAttribute("src","http://www.visualtour.com/applets/flashviewer2/viewer.asp?t=1754762&sk=202");
iframe.setAttribute("scrolling","no");
video.appendChild("iframe");*/

carousel.parentNode.insertBefore(video, carousel.nextSibling);

