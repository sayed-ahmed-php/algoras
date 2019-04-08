/*Fixed Header
============================*/
$(document).ready(function () {

	"use strict";
	var b = 50,
		S = 150;
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
    $(window).scroll(function () {
        var a = getCurrentScroll();
        if (a >= b) {
            $('.header').addClass('scrolled');
//			$('.index .navbar-brand .colored-log').css({opacity : 1});
//			$('.index .navbar-brand .white-logo').css({opacity : 0});

        } else {
            $('.header').removeClass('scrolled');
//			$('.index .navbar-brand .colored-log').css({opacity : 0});
//			$('.index .navbar-brand .white-logo').css({opacity : 1});

        }
    });
	$(window).scroll(function () {
        var a = getCurrentScroll();
        if (a >= S) {
            
            $('.side-social').addClass('scrolled');
        } else {
            
            $('.side-social').removeClass('scrolled');
        }
    });
	$(window).scroll(function () {
        var a = getCurrentScroll();
        if (a >= b) {
            
            $('.header .dropdown > a , .header .top-header .phone , .header .form-inline .search').addClass('scrolled');
        } else {
            $('.header .dropdown > a ,.header .top-header .phone ').removeClass('scrolled');
        }
    });
	
	/*level two clicked*/
	
	$(".dropdown-item.listed-menu").on('click', function () {
	   $(this).toggleClass("toggle");
	   $(this).siblings().removeClass("toggle");
	   
		$(this).find('.dropdown-list').slideToggle();
		$(this).siblings(".listed-menu").find('.dropdown-list').slideUp();
    });
	
	/*partners*/
	
	$(".partners .accordion #headingOne").on('click', function () {
		$(".seperator.septone").toggleClass("toggle");
		$(".seperator.septtwo").removeClass("toggle");
		$(".seperator.septthree").removeClass("toggle");
		$(".seperator.septfour").removeClass("toggle");
    });
	$(".partners .accordion #headingTwo").on('click', function () {
		$(".seperator.septtwo").toggleClass("toggle");
		$(".seperator.septone").removeClass("toggle");
		$(".seperator.septthree").removeClass("toggle");
		$(".seperator.septfour").removeClass("toggle");
		
    });
	$(".partners .accordion #headingThree").on('click', function () {
		$(".seperator.septthree").toggleClass("toggle");
		$(".seperator.septone").removeClass("toggle");
		$(".seperator.septtwo").removeClass("toggle");
		$(".seperator.septfour").removeClass("toggle");
    });
	$(".partners .accordion #headingFour").on('click', function () {
		$(".seperator.septfour").toggleClass("toggle");
		$(".seperator.septone").removeClass("toggle");
		$(".seperator.septtwo").removeClass("toggle");
		$(".seperator.septthree").removeClass("toggle");
    });
	
	$(".partners .accordion .card-header.noseperat").on('click', function () {
		$(".seperator.septfour").removeClass("toggle");
		$(".seperator.septone").removeClass("toggle");
		$(".seperator.septtwo").removeClass("toggle");
		$(".seperator.septthree").removeClass("toggle");
	});
});
/* owl carousel
==========================*/
$(document).ready(function () {
    "use strict";
    $('.owl-carousel').owlCarousel({
        items: 5,
        margin: 10,
        loop: true,
        autoplay: true,
        nav: true,
        dots: false,
        navSpeed: 1000,
//        autoplayTimeout: 3000,
        autoplaySpeed: 2500,
        slideTransition: 'linear',
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            500: {
                items: 2,
                nav: false,
                dots: true
            },
            800: {
                items: 3,
                nav: false,
                dots: true
            },
            1000: {
                items: 4,
                nav: false,
                dots: true
            },
            1100: {
                items: 5,
                nav: true,
                dots: false
            }
            
        }
    });
});
/* scroll to
============================*/
$(document).ready(function () {
    "use strict";
    /*scroll-top*/
    var scrollButton = $("#scroll-top");
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 600) {
                scrollButton.show();
            } else {
                scrollButton.hide();
            }

        });
        scrollButton.click(function () {
            $("html,body").animate({scrollTop: 0}, 1200);

        });
});
/*wow.js
============================*/
$(document).ready(function () {
    "use strict";
    new WOW().init();
    
});