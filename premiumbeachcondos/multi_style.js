$(".top-level-nav").append("<div class=\"social-icons\"><a href=\"https://www.facebook.com/PremiumBeachCondos\"><i class='icon-facebook-sign social-icons'></i></a></div>");
//$(".top-level-nav").append("<div class=\"social-icons\"><a href=\"https://twitter.com/eatlovestayus\"><img src=\"https://s3.amazonaws.com/jomumist-myvr-prod-photos/inserts/eatlovestay/twitter.png\" border=\"0\" /></a></div>");
$(".top-level-nav").append("<div class=\"social-icons\"><a href=\"https://plus.google.com/u/0/+Premiumbeachcondos_vacation_rental_magazine\"><i class='icon-google-plus'></i></a></div>");
$(".top-level-nav").append("<div class=\"social-icons\"><a href=\"http://www.pinterest.com/jennyoest/panama-city-beach-vacation-rentals-insiders-guide/\"><i class='icon-pinterest'></i></a></div>");
$(".top-level-nav").append("<div class=\"social-icons\"><a href=\"https://www.linkedin.com/pub/jenny-oest/1/3b4/23a\"><i class='icon-linkedin'></i></a></div>");


if(!window.console){ window.console = {log: function(){} }; }
//var containerHTML = $( "#property-carousel" ).html();
//console.log("#property-carousel = " + containerHTML);

TourLinks = function() {
  /* Private data. */
  var data = {
    "calypso-5th-floor-east-tower": "http://tours.ecrep.co/public/vtour/display/163131?a=1",
    "calypso-6th-floor-east-tower": "http://tours.ecrep.co/public/vtour/display/163139?a=1",
    "calypso-10th-floor-east-tower": "http://tours.ecrep.co/public/vtour/display/163137?a=1"
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

//console.log("slug = " + slug);

var link = tourLinks.getLink(slug);

//console.log("link = " + link);

if(link != "none")
  $( "#property-carousel" )
    .append( "<div style=\"text-align:center\"><br/><h2><a href=\""
    + link
    + "\" target=\"_blank\">Take the Virtual Tour</a></h2></div>"
    );
