var tab2 = document.getElementById("tab2");
var theKids = tab2.childNodes;

theKids[0].style.display='none';
theKids[1].style.display='none';
theKids[1].checked = true;
theKids[2].removeAttribute("style.display");
theKids[3].style.display='none';
