var form = document.getElementsByName("InquiryForm");

alert("# of InquiryForms = " + form.length);

var specialRequests = form[1].getElementsByTagName("DIV")[3];

alert("# of Div children = " + specialRequests.length);

specialRequests.getElementsByTagName("DIV")[1].innerHTML = '';

alert(specialRequests.getElementsByTagName("DIV")[0]);
