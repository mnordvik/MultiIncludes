if(!window.console){ window.console = {log: function(){} }; }
var containerHTML = $( "#property-carousel" ).html();
console.log("#property-carousel = " + containerHTML);

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

var pathArray = window.location.href.split('/');
var link;
var tourLinks = new TourLinks();

if(pathArray[pathArray.length - 1] != '')
    link = tourLinks.getLink([pathArray[pathArray.length - 1]]);
else
    link = tourLinks.getLink([pathArray[pathArray.length - 2]]);


console.log("link = " + link);

if(link != "none")
  $( "#property-carousel" )
    .append( "<div style=\"text-align:center\"><br/><h2><a href=\""
    + link
    + "\" target=\"_blank\">Take the Virtual Tour</a></h2></div>"
    );
