var tab2 = document.getElementById("tab2");
var theKids = tab2.childNodes;

for (i=0;i<theKids.length;i++)
{
  if(i!=7) {
    theKids[i].style.display='none';
  }
  theKids[7].style.display='inline';
}

//theKids[3].checked='true';
