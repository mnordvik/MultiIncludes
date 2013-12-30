if(!window.console){ window.console = {log: function(){} }; }
var containerHTML = $( "#property-carousel" ).html();
console.log("#property-carousel = " + containerHTML);

TourLinks = function() {
  /* Private data. */
  var data = {
    "calypso-5th-floor-east-tower": "http://tours.ecrep.co/public/vtour/display/163131?a=1",
    "calypso605east": "http://tours.ecrep.co/public/vtour/display/163139?a=1",
    "calypso1007e": "http://tours.ecrep.co/public/vtour/display/163137?a=1"
  }
  /* Get a link for a tour by property slug, or notify that there is none */
  this.getLink = function(slug) {
    if(data.hasOwnProperty(slug)) { return data[slug]; }
    return "none";
  }
}

var pathArray = window.location.href.split('/');
var slug;
var tourLinks = new TourLinks();

if(pathArray[pathArray.length - 1] != '')
    slug = pathArray[pathArray.length - 1];
else
    slug = pathArray[pathArray.length - 2];

console.log("slug = " + slug);

var link = tourLinks.getLink(slug);

console.log("link = " + link);

if(link != "none")
  $( "#property-carousel" )
    .append( "<div style=\"text-align:center\"><br/><h2><a href=\""
    + link
    + "\" target=\"_blank\">Take the Virtual Tour</a></h2></div>"
    );
