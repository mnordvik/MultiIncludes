document.getElementById("header").style.display='none';
document.getElementById("search").style.display='none';
document.getElementById("footer").style.display='none';

var content = document.getElementById("content");

if(typeof content !== "undefined" && content != null) {

  var mainTitle = content.firstChild;

  var backLink = document.createElement("div");
  backLink.innerHTML = '<a href="http://floatingstonecasitas.myvr.com/property/">Back to all properties</a>';

  mainTitle.appendChild(backLink);
  /*var holder = mainTitle.firstChild;

  if (holder.nextSibling) {
    holder.parentNode.insertBefore(backLink, holder.nextSibling);
  } else {
    holder.parentNode.appendChild(backLink);
  }*/

}
