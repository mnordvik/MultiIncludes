console.log("INNNNN");
var pathElements = location.pathname.split("/");
if (pathElements.length > 1 && pathElements[0] == "property") {
  console.log(pathElements[0]);
  console.log(document.domain + "/" + pathElements[1] + "/");
  $('.inquiry-container').innerHTML(
    "<h3>Stay With Us!</h3>"
    + "<div class=\"row text-center\"><a class=\"btn btn-primary btn-lg rounded-bigger\" href=\"\">Book Now</a></div>"
    + "<div class=\"row text-center\">OR</div>"
    + "<div class=\"row text-center\">Telephone: 0345 869 1463</div>"
  );
}
