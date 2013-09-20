document.getElementById("header").style.display='none';
document.getElementById("search").style.display='none';
document.getElementById("footer").style.display='none';

var sidebar = document.getElementById("sidebar");
if(typeof sidebar !== "undefined" && sidebar != null) {
    sidebar.style.display='none';
}

var pathArray = window.location.href.split('/');
var finalDirectory;

if(pathArray[pathArray.length - 1] != '')
    finalDirectory = pathArray[pathArray.length - 1];
else
    finalDirectory = pathArray[pathArray.length - 2];

if(finalDirectory != 'property') {

  var content = document.getElementById("content");
  
  if(typeof content !== "undefined" && content != null) {
  
    var mainTitle = content.firstChild.nextSibling;
    
    var backLink = document.createElement("div");
    backLink.innerHTML = '<a href="http://floatingstonecasitas.myvr.com/property/" style="font-size:22px;padding-left:150px">Back to all properties</a>';
  
    mainTitle.appendChild(backLink);
  
  }

}
