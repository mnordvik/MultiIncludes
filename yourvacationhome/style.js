var form = document.getElementsByName("InquiryForm");

form[1].childNodes[3].childNodes[1].innerHTML='';

alert(form[1].childNodes[3].childNodes[1].innerHTML);

alert("The 4th Div = "+form[1].childNodes[3].className);

/*alert("# of InquiryForms = " + form.length);

var formSections = form[1].getElementsByTagName("DIV");

alert("# of formSections = " + formSections.length);

var specialRequests = formSections[3];

alert("specialRequests.className = " + specialRequests.className);

var requests = specialRequests.getElementsByTagName("DIV");

alert("requests.length = " + requests.length);

requests[0].innerHTML = 'THIS IS WHERE YOU ARE NOW :(';*/

