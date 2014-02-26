$(".top-level-nav").append("<div class=\"social-icons\"><a href=\"https://www.facebook.com/EatLoveStay\"><img src=\"https://s3.amazonaws.com/jomumist-myvr-prod-photos/inserts/eatlovestay/facebook.png\" border=\"0\" /></a></div>");
$(".top-level-nav").append("<div class=\"social-icons\"><a href=\"https://twitter.com/eatlovestayus\"><img src=\"https://s3.amazonaws.com/jomumist-myvr-prod-photos/inserts/eatlovestay/twitter.png\" border=\"0\" /></a></div>");
$(".top-level-nav").append("<div class=\"social-icons\"><a href=\"http://www.linkedin.com/company/eat-love-stay-home-rentals?trk=cp_followed_name_eat-love-stay-home-rentals\"><img src=\"https://s3.amazonaws.com/jomumist-myvr-prod-photos/inserts/eatlovestay/linkedin.png\" border=\"0\" /></a></div>");

console.log($(.footer-links li).html());
console.log(document.documentElement.innerHTML.indexOf('href=\"/blog'));
//console.log();

$(.footer-links li).html().replace('href=\"/blog', 'href=\"http://blog.eatlovestay.com');

if(document.documentElement.innerHTML.indexOf("sample_background.png") != 0)
  $(".page-banner").css("background-image", "url(\"https://s3.amazonaws.com/jomumist-myvr-prod-photos/inserts/hollywood_hills.jpg\")");
