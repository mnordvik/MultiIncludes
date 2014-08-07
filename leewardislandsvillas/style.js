debugger;

var trimmed = $(' strong:contains(".000") ').html().replace(".000","");
//console.log(trimmed);

$(' strong:contains(".000") ').html(trimmed);
