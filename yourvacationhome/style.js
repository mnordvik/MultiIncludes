var form = document.getElementsByName("InquiryForm");

alert("# of InquiryForms = " + form.length);

var specialRequests = form[1].getElementsByTagName("DIV")[3];

alert("specialRequests.className = " + specialRequests.className);

var requests = specialRequests.getElementsByTagName("DIV");

alert("requests.length = " + requests.length);

requests[1].innerHTML = '';

