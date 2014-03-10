var scriptText = "<script src=\"https://lets.paybygroup.com/snippet/v1/loader.js\" data-merchant-id=\"frostmanagement\"></script>";
var newText = "<script>" + scriptText + "</script>";

  var head= document.getElementsByTagName('head')[0];
   var script= document.createElement('script');
   script.type= 'text/javascript';
   script.src= 'helper.js';
   head.appendChild(newText);
