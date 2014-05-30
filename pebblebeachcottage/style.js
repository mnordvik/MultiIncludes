$(" #calendar_wrapper ").remove();
$(" #estimate_wrapper ").remove();

var calendarTab = $(" #calendar_tab ").innerHTML.replace("Calendar","Fees");
console.log(calendarTab);
$(" #calendar_tab ").innerHTML = calendarTab;
