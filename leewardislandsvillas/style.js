$("strong:contains('.000')").each(function(){
    var trimmed = $(this).html().replace('.000', '');
    $(this).html(trimmed);
});
