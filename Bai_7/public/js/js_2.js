$(function() {
    var count = $('.slide-image').length;

    /*for (x = 0; x < count; x++) {
        $('.slide-pager ul').prepend("<li class ='slide-pager-slot'></li>")
    }
    $('.slide-pager-slot :first-child').addClass('focus');*/
    var eindex = 0;
    $('.slide-pager-slot').click(function() {
        eindex = $('.slide-pager-slot').index(this);
        $('.slide-image').stop().animate({ opacity: 0 });
        $('.slide-image:eq(' + eindex + ')').stop().animate({
            opacity: 1
        });
        $('.slide-pager-slot').removeClass('focus');
        $(this).addClass('focus');
    });

    function setimagefocus() {
        $('.slide-pager-slot').removeClass('focus');
        $('.slide-image-slot:eq(' + eindex + ')').addClass('focus');
        $('.slide-image').stop().animate({ opacity: 0 });
        $('.slide-image:eq(' + eindex + ')').stop().animate({ opacity: 1 });
    }

    function slideswap() {
        if (eindex == count - 1) {
            eindex = -1;
        }
        eindex++;
        setimagefocus();
    }

    function start_slideswap() {
        timeinterval = 3000;
        play = setInterval(slideswap, timeinterval);
    }
    $(".slide-container").hover(function() {
        clearInterval(play);
    }, function() {
        start_slideswap();

    });
    $('.slide-control-prev').click(function() {
        eindex--;
        if (eindex == -1) { eindex = count - 1 }
        setimagefocus();
    });
    $('.slide-control-next').click(function() {
        eindex++;
        if (eindex == count) {
            eindex = 0;
        }
        setimagefocus();
    });
});