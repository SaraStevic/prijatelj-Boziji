$(document).ready(function () {

    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 100) {
                var animacija = $(this).attr('data-animation');
                $(this).addClass(animacija);
            }
        });
    }

    animation();

    $(window).scroll(function () {
        animation();
    });

    //SLIDER

    if ($('.owl-carousel').length > 0) {

        $('.lead-slider').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: true,
            autoplay: true,
            nav: false,
            items: 1


        });


    }


});


