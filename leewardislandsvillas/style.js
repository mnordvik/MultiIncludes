debugger;

console.log($(' strong:contains(".000") ').innerHTML);

$(' strong:contains(".000") ').html(
  $(' strong:contains(".000") ').innerHTML.replace('.000','')
);
