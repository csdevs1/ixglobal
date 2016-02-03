$(window).load(function() {
    /*
        Note: Stop page scrolling while loading.
    */
    $("#loader").delay(100).hide();
});

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

$(document).ready(function() {
    var text_max = 1445;
    $('#textarea_feedback').html('(Quedan ' + text_max + ' caracteres)');

    $('#textarea').keyup(function() {
        var text_length = $('#textarea').val().length;
        var text_remaining = text_max - text_length;

        $('#textarea_feedback').html('(Quedan ' +text_remaining + ' caracteres)');
    });
});

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