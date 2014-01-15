$("div#text-holder").each(function() {
    var $this = $(this);
    $this.html($this.html().replace(/&nbsp;/g, ' '));
    $this.html($this.html().replace(/&amp;/g, '&'));
});
