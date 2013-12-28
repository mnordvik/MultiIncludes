if(!window.console){ window.console = {log: function(){} }; }
 
console.log("#selected_photo_container = " + $( #selected_photo_container ).html());
//$( "#selected_photo_container" ).append("HERE I AM");

TourLinks = function() {
  /* Private data. */
  var data = {
    "calypso508east": "http://tours.ecrep.co/public/vtour/display/163131?a=1",
    "calypso605east": "http://tours.ecrep.co/public/vtour/display/163139?a=1",
    "calypso1007e": "http://tours.ecrep.co/public/vtour/display/163137?a=1"
  }
  /* Get a link for a tour by property slug, or notify that there is none */
  this.getLink = function(slug) {
    if(data.hasOwnProperty(slug)) { return data[slug]; }
    return "none";
  }
}

var slug = window.location.href.split('.')[0].split('//')[1];
var tourLinks = new TourLinks();
var link = tourLinks.getLink(slug);

if(link != "none")
  $( "#selected_photo_container" )
    .append( "<div style=\"text-align:center\"><a href=\""
    + tourLinks.getLink
    + "\" target=\"_blank\">Take the Virtual Tour</a></div>"
    );

