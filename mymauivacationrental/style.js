//$("#favicon").attr("href","https://s3.amazonaws.com/jomumist-myvr-prod-photos/inserts/mymauivacationrental/favicon.ico");

$('#favicon').remove();
$('<link id="favicon" type="image/x-icon" rel="shortcut icon" href="https://s3.amazonaws.com/jomumist-myvr-prod-photos/inserts/mymauivacationrental/favicon.ico" />').appendTo('head');
