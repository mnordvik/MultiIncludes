// Remove smoking/pets from inquiry form
var form = document.getElementsByName("InquiryForm");
//alert(form[1].childNodes[7].innerHTML);
//form[1].childNodes[7].childNodes[2].innerHTML = '';

$(document).ready(function () {
   $("div h5:contains('Special Requests')").parent('div').remove();

   //$('.inquiry_vert_sections:contains("Special Requests")').parent().remove();

   //if ($('#inquiry_vert_sections').find('.profile-img').size() >= 2) {
   //   $('#type2').find('.profile-img:first').remove();
   //}
});

// Change More Info to Home Video in the topnav
var moreInfo = document.getElementById("more_info_tab");
moreInfo.innerHTML = 'HOME<br/><span>VIDEO</span>';

// Add Superior Vacation Home logo in footer
var footerFirstSection = document.getElementById("footer_link_section_one");
footerFirstSection.innerHTML = footerFirstSection.innerHTML + 
'<div style="float:left;padding-top:10px;"><a href="http://superiorvacationhome.com/">' +
'<img src="https://s3.amazonaws.com/jomumist-myvr-prod-photos/inserts/superior_vacation_home.png" width="50%" height="50%"/>' +
'</a></div>';

//alert("The 4th Div = "+form[1].childNodes[3].className);
//form[1].childNodes[3].childNodes[1].innerHTML='';
//form[0].childNodes[3].childNodes[1].innerHTML='';

// Make Home Info longer
/*var pathArray = window.location.href.split('/');
var finalDirectory;
if(pathArray[pathArray.length - 1] != '')
    finalDirectory = pathArray[pathArray.length - 1];*/

// Add space under the Amenities link to insure that the text under the image of Home Info is within white area
var amenitiesLink = document.getElementsByClassName("ameneties-link-lead");
amenitiesLink[0].style.height = "125px";

