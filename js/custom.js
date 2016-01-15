$(document).ready(function($) {
 /*   setTimeout(function() {
        function count($this){
            var current = parseInt($this.html(), 10);
            current = current + 0; /* Where 50 is increment */	
           /* $this.html(++current);
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
    }, 200);*/
});
/* Fade out on Scroll
$(window).scroll(function() {
    $(".logo").css({'opacity': 1-(($(this).scrollTop())/250)});          
});*/

$(function () {
    var fx = function fx() {
    $(".stat-number").each(function (i, el) {
        var data = parseInt(this.dataset.n, 10);
        var props = {
            "from": {
                "count": 0
            },
                "to": {
                "count": data
            }
        };
        $(props.from).animate(props.to, {
            duration: 1500 * 1,
            step: function (now, fx) {
                $(el).text(Math.ceil(now));
            },
            complete:function() {
                if (el.dataset.sym !== undefined) {
                  el.textContent = el.textContent.concat(el.dataset.sym)
                }
            }
        });
    });
    };
    
    var reset = function reset() {
        console.log($(this).scrollTop())
        if ($(this).scrollTop() > 250) {
            $(this).off("scroll");
          fx()
        }
    };
    
    $(window).on("scroll", reset);
});