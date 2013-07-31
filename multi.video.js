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

var videoLinks = {
    '23496-olde-meadowbrook-cir': 'http://www.visualtour.com/showvt.asp?t=1754762&prt=10003&sk=202',
    '10140-bellavista-circle-1101': 'http://www.visualtour.com/showvt.asp?t=2231236&prt=10003&sk=202',
    '27550-horne-ave-bonita-springs-fl': 'http://www.visualtour.com/showvt.asp?t=2648352&sk=202',
    'villalagos-at-mediterra-single-family-pool-home': 'http://www.visualtour.com/showvt.asp?sk=13&t=2606270'
};

var carousel = document.getElementById("property-carousel");
var video = document.createElement("div");
//alert(window.location.href);

var pathArray = window.location.href.split('/');
for (var i=0;i<pathArray.length;i++)
{ 
alert('path obj'+i+':'+pathArray[i]);
}

alert('path obj'+i+':'+pathArray[i]);
var propNamespace = videoLinks[pathArray[pathArray.length - 1]];

alert('propNamespace = ' + propNamespace);

if(propNamespace != null) {

video.innerHTML = '<iframe src="http://www.visualtour.com/showvt.asp?t=2275330&prt=10003&sk=202" scrolling="auto"' +
 'width="720" height="450" frameborder="1"></iframe>';

carousel.parentNode.insertBefore(video, carousel.nextSibling);

}
