if(!window.console){ window.console = {log: function(){} }; }
var containerHTML = $( "#selected_photo_container" ).html();
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
var slug;

if(pathArray[pathArray.length - 1] != '')
    slug = videoLinks[pathArray[pathArray.length - 1]];
else
    slug = videoLinks[pathArray[pathArray.length - 2]];


//console.log("slug = " + slug);
var tourLinks = new TourLinks();
var link = tourLinks.getLink(slug);

console.log("link = " + link);

if(link != "none")
  $( "#property-carousel" )
    .append( "<div style=\"text-align:center\"><br/><h2><a href=\""
    + link
    + "\" target=\"_blank\">Take the Virtual Tour</a></h2></div>"
    );
