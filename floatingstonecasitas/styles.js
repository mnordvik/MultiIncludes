document.getElementById("header").style.display='none';
document.getElementById("search").style.display='none';
document.getElementById("footer").style.display='none';

var content = document.getElementById("content");

if(typeof content !== "undefined" && content != null) {

  var mainTitle = content.firstChild.nextSibling;
  
  var backLink = document.createElement("div");
  backLink.style.fontSize='22px';
  backLink.style.paddingLeft='150px';
  backLink.innerHTML = '<a href="http://floatingstonecasitas.myvr.com/property/" style="font-size:22px;padding-left:150px">Back to all properties</a>';

  //alert(mainTitle.innerHTML);
  mainTitle.appendChild(backLink);
  /*var holder = mainTitle.firstChild;

  if (holder.nextSibling) {
    holder.parentNode.insertBefore(backLink, holder.nextSibling);
  } else {
    holder.parentNode.appendChild(backLink);
  }*/

}
