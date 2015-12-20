$(document).ready(function($) {
    setTimeout(function() {
        function count($this){
            var current = parseInt($this.html(), 10);
            current = current + 0; /* Where 50 is increment */	
            $this.html(++current);
            if(current > $this.data('count')){
                $this.html($this.data('count'));
            } else {    
                setTimeout(function(){count($this)}, 150);
            }
        }        	
        $(".stat-count").each(function() {
            $(this).data('count', parseInt($(this).html(), 10));
            $(this).html('0');
            count($(this));
        });
    }, 200);
});
/* Fade out on Scroll
$(window).scroll(function() {
    $(".logo").css({'opacity': 1-(($(this).scrollTop())/250)});          
});*/