var form = document.getElementsByName("InquiryForm");

alert("# of InquiryForms = " + form.length);

var formSections = form[1].getElementsByTagName("DIV");

alert("# of formSections = " + formSections.length);

var specialRequests = formSections[3];

alert("specialRequests.className = " + specialRequests.className);

var requests = specialRequests.getElementsByTagName("DIV");

alert("requests.length = " + requests.length);

requests[0].innerHTML = 'THIS IS WHERE YOU ARE NOW :(';

