var tab2 = document.getElementById("tab2");
var theKids = tab2.childNodes;

for (i=0;i<theKids.length;i++)
{
alert("Nodename: " + theKids[i].nodeName);
alert("nodetype: " + theKids[i].nodeType);
}

theKids[0].style.display='none';
theKids[1].style.display='none';
theKids[1].checked = true;
theKids[2].style.display='inline';
theKids[3].style.display='none';
