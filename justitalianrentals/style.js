console.log("INNNNN");
var pathElements = location.pathname.split("/");
console.log(pathElements);
if (pathElements.length > 1 && pathElements.indexOf('property')!==-1) {
  console.log(pathElements[1]);
  console.log(document.domain + "/" + pathElements[pathElements.indexOf('property')+1] + "/");
  $('.inquiry-container').html(
    "<h3>Stay With Us!</h3>"
    + "<div class=\"row text-center\"><a class=\"btn btn-primary btn-lg rounded-bigger\" href=\"
    + document.domain + "/" + pathElements[pathElements.indexOf('property')+1] + "/"
    + "\">Book Now</a></div>"
    + "<div class=\"row text-center\">OR</div>"
    + "<div class=\"row text-center\">Telephone: 0345 869 1463</div>"
  );
}
