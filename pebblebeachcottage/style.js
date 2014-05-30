$(" #calendar_wrapper ").remove();
$(" #estimate_wrapper ").remove();

console.log($(" #calendar_tab ").html());
var calendarTab = $(" #calendar_tab ").html().replace("Calendar","Fees");
console.log(calendarTab);
$(" #calendar_tab ").html(calendarTab.toString());
