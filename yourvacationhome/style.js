// Remove smoking/pets from inquiry form
var form = document.getElementsByName("InquiryForm");
form[1].childNodes[7].childNodes[3].innerHTML = '';

// Change More Info to Home Video in the topnav
var moreInfo = document.getElementById("more_info_tab");
moreInfo.innerHTML = 'HOME<br/><span>VIDEO</span>';

// Add Superior Vacation Home logo in footer
var footerThirdSection = document.getElementById("footer_link_section_three");
footerThirdSection.innerHTML = footerThirdSection.innerHTML + 
'<div style="float:right"><a href="http://superiorvacationhome.com/">' +
'<img src="https://s3.amazonaws.com/jomumist-myvr-prod-photos/inserts/superior_vacation_home.png" width="50%" height="50%"/>' +
'</a></div>';

//alert("The 4th Div = "+form[1].childNodes[3].className);
//form[1].childNodes[3].childNodes[1].innerHTML='';
//form[0].childNodes[3].childNodes[1].innerHTML='';

// Make Home Info longer
/*var pathArray = window.location.href.split('/');
var finalDirectory;

if(pathArray[pathArray.length - 1] != '')
    finalDirectory = pathArray[pathArray.length - 1];
else
    finalDirectory = pathArray[pathArray.length - 2];

if(finalDirectory == 'home_info') {*/
  var homeInfo = document.getElementById("home_info");
  var menuContent = document.getElementsByClassName("menu_content_content");
  //alert(menuContent[0].innerHTML);
  menuContent[0].style.minHeight = "440px";
//}
