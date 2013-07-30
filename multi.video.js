

var carousel = document.getElementById("property-carousel");

var video = document.createElement("div");

video.innerHTML = 'TEST!';

carousel.parentNode.insertBefore(video, carousel.nextSibling);

