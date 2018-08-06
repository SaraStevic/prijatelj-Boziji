$(document).ready(function(){
    
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
    
    $(window).scroll(function(){
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
            nav:false,
            items:1

            
        });
        
//        $('.testimonial-slider').owlCarousel({
//            loop: true,
//            margin: 0,
//            responsiveClass: true,
//            dots: true,
//            autoplay: true,
//            nav:false,
//            items:1
//
//            
//        });
//        
//        
//        
//        $('.team-slider').owlCarousel({
//            loop: true,
//            margin: 30,
//            responsiveClass: true,
//            dots: true,
//            autoplay: true,
//
//            responsive: {
//                0: {
//                    items: 1
//                },
//                576: {
//                    items: 2
//                },
//                992: {
//                    items: 3
//                },
//                1200: {
//                    items: 4
//                }
//            }
//        });
//        
//        $('.portfolio-slider').owlCarousel({
//            loop: true,
//            margin: 30,
//            responsiveClass: true,
//            dots: true,
//            autoplay: true,
//
//            responsive: {
//                0: {
//                    items: 1
//                },
//                576: {
//                    items: 2
//                },
//                992: {
//                    items: 3
//                },
//                1200: {
//                    items: 4
//                }
//            }
//        });
    }

    
});


