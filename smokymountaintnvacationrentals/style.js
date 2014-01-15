$("div.text-holder").each(function() {
    
    var $this = $(this);
    console.log($this.html());
    $this.html($this.html().replace(/&nbsp;/g, ' '));
    $this.html($this.html().replace(/&amp;/g, '&'));
});
