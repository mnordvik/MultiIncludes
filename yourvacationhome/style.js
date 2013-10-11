var form = document.getElementsByName("InquiryForm");

alert(form[1].childNodes[3].childNodes[1].innerHTML);

alert("The 4th Div = "+form[1].childNodes[3].className);

form[1].childNodes[3].childNodes[1].innerHTML='';
