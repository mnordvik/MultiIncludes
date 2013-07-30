var carousel = document.getElementById("property-carousel");

var video = document.createElement("div");

var iframe = document.createElement("img");
/*iframe.setAttribute("src","http://www.visualtour.com/applets/flashviewer2/viewer.asp?t=1754762&sk=202");*/
iframe.setAttribute("src","http://www.w3schools.com/images/w3schoolslogoNEW310113.gif");
/*iframe.setAttribute("scrolling","no");*/

video.appendChild("iframe");

carousel.parentNode.insertBefore(video, carousel.nextSibling);

