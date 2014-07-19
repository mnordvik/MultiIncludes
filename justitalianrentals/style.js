var pathElements = location.pathname.split("/");
console.log(pathElements);
if (pathElements.length > 1 && pathElements.indexOf('property')!==-1) {
  var bookingPage = document.domain + "/" + pathElements[pathElements.indexOf('property')+1] + "/";
  console.log("bookingPage = " + bookingPage);
  $('.inquiry-container').html(
    "<div class=\"row text-center\"><br/><a href=\"" + bookingPage + "\" target=\"_self\">"
    + "<div class=\"btn btn-primary btn-lg rounded-bigger\">Book Now</div></a></div>"
    + "<div class=\"row text-center\"><br/>or call us</div>"
    + "<div class=\"row text-center\"><h3>0345 869 1463</h3></div>"
  );
}
