
var carousel = document.getElementById("property-carousel");

var video = document.createElement("div");

video.innerHTML = '<iframe id="ifrm" name="ifrm" src="http://www.visualtour.com/showvt.asp?t=1754762&prt=10003&sk=202" scrolling="auto"
 width="790"  height="1024" frameborder="3"><a href="http://www.visualtour.com/showvt.asp?t=1754762&prt=10003&sk=202" target="_blank">Click here for 360 tour</a></iframe>';

carousel.parentNode.insertBefore(video, carousel.nextSibling);

