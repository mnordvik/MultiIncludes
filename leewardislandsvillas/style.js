debugger;

console.log($(' td:has(strong:contains("Tax")) ').innerHTML);

console.log($(' td:contains("Tax") ').next('td').innerHTML);

$(' td:contains("Tax") ').next('td').html(
  $(' td:contains("Tax") ').next('td').innerHTML.replace('.000','')
);
