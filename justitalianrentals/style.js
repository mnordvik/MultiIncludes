console.log("INNNNN");
var pathElements = location.pathname.split("/");
console.log(pathElements);
if (pathElements.length > 1 && pathElements.indexOf('property')!==-1) {
  console.log(pathElements[1]);
  var bookingPage = document.domain + "/" + pathElements[pathElements.indexOf('property')+1] + "/";
  console.log("bookingPage = " + bookingPage);
  $('.inquiry-container').html(
    "<div class=\"row text-center\"><a class=\"btn btn-primary btn-lg rounded-bigger\" href=\""
    + bookingPage +
    + "\">Book Now</a></div>"
    + "<div class=\"row text-center\">or call us</div>"
    + "<div class=\"row text-center\"><h3>Telephone: 0345 869 1463</h3></div>"
  );
}
