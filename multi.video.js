var carousel = document.getElementById("property-carousel");

var video = document.createElement("div");
//var video = document.createElement("section");
//video.setAttribute("class","toggle-block");
//video.setAttribute("ng-class","{active: !collapse.video}");

//video.innerHTML = '<section class="toggle-block" ng-class="{active: !collapse.video}">' +
//            '<a class="opener" ng-click="collapse.video = !collapse.video">' +
/*video.innerHTML = '<a class="opener" ng-click="collapse.video = !collapse.video">' +
            '<h3>Video Tour</h3>' +
            '</a>' +
            '<div class="slide" collapse="collapse.overview">' +
              '<div class="container">' +
 '<iframe src="http://www.visualtour.com/showvt.asp?t=2275330&prt=10003&sk=202" scrolling="auto"' +
 'width="720" height="600" frameborder="1"></iframe>' +
'</div></div>';*/
//'</div></div></section>';

video.innerHTML = '<iframe src="http://www.visualtour.com/showvt.asp?t=2275330&prt=10003&sk=202" scrolling="auto"' +
 'width="720" height="550" frameborder="1"></iframe>';

carousel.parentNode.insertBefore(video, carousel.nextSibling);

