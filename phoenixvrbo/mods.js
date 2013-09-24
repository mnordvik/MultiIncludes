var tab2 = document.getElementById("tab2");
var theKids = tab2.childNodes;

//for (i=0;i<7;i++)
//  theKids[i].parentNode.removeChild(theKids[i]);

for (i=0;i<theKids.length;i++)
{
  alert("Nodename:" + theKids[i].nodeName + " value:" + theKids[i].nodeValue + " type:" + theKids[i].nodeType);
  /*if(i!=7) {
    if(theKids[i].nodeType="Text")
      theKids[i].nodeValue='';
    else
      theKids[i].style.display='none';
  }*/
}
//  theKids[3].checked='true';
  //theKids[7].style.display='inline';

//theKids[3].checked='true';
