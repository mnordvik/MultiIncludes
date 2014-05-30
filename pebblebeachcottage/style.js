$(" #calendar_wrapper ").remove();
$(" #estimate_wrapper ").remove();

var calendarTab = $(" #calendar_tab ").innerHTML;
calendarTab = calendarTab.replace("Calendar","Fees");
$(" #calendar_tab ").innerHTML = calendarTab;
