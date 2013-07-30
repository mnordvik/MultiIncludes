var carousel = document.getElementById("property-carousel");

var video = document.createElement("div");

video.innerHTML = '<section class="toggle-block" ng-class="{active: !collapse.video}">' +
            '<a class="opener" ng-click="collapse.video = !collapse.video">' +
              '<h3>Video Tour</h3>' +
            '</a>' +
            '<div class="slide" collapse="collapse.overview">' +
              '<div class="container">' +
 '<iframe src="http://www.visualtour.com/showvt.asp?t=2275330&prt=10003&sk=202" scrolling="auto"' +
 'width="720" height="800" frameborder="1"></iframe>' +
 '</div></div></section>';
/*var iframe = document.createElement("img");
iframe.setAttribute("src","http://www.visualtour.com/applets/flashviewer2/viewer.asp?t=1754762&sk=202");
iframe.setAttribute("scrolling","no");
video.appendChild("iframe");*/

carousel.parentNode.parentNode.insertBefore(video, carousel.parentNode.nextSibling);

