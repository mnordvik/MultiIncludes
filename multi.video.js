var carousel = document.getElementById("property-carousel");

var video = document.createElement("div");

video.innerHTML = '<iframe src="www.google.com" scrolling="auto"
 width="790"  height="1024" frameborder="3"></iframe>';

carousel.parentNode.insertBefore(video, carousel.nextSibling);

