document.getElementById("header").style.display='none';
document.getElementById("search").style.display='none';
document.getElementById("footer").style.display='none';

var mainTitle = document.getElementById("main-title");

if(typeof mainTitle !== "undefined") {

  var backLink = document.createElement("div");
  backLink.innerHTML = '<a href="http://floatingstonecasitas.myvr.com/property/">Back to all properties</a>';

  var holder = mainTitle.firstChild;

  if (holder.nextSibling) {
    holder.parentNode.insertBefore(backLink, holder.nextSibling);
  } else {
    holder.parentNode.appendChild(backLink);
  }

}
