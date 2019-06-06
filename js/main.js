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
        } else {
            $('.header').removeClass('scrolled');
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
	/*industries dictionary tabs*/
	// Deal With Tabs
    
    $('.tab-switch li').on('click', function () {
       // Add Selected Class To Active Link
        
        $(this).addClass('selected').siblings().removeClass();
        
        // Hide All Div
        $('.extend-tabs .extend-tabs-content > div').hide();
        
        //Show Div That is  Connected with selected tab
        $('.' + $(this).data('class')).show();
        
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

/* mobile menu
============================*/
$(document).ready(function () {
    "use strict";
	$(".sub-icon").on('click', function () {
		$(this).next(".sub-mobile-nav").addClass('show');
		$(this).parentsUntil('mobile-nav').addClass('overflow');
	});
	$(".close-btn").on('click', function () {
		
		if($(this).hasClass("level1")){
			$(this).parentsUntil('mobile-nav').removeClass('overflow');
			$(this).parent(".sub-mobile-nav").removeClass('show');
		} else{
			$(this).parent(".sub-mobile-nav").removeClass('show');
		}
	});
	$(".header .form-inline .btn.search").on('click', function () {
		$(".header .form-inline.search-form .search-box").toggleClass("toggle");
	});
});
				  
				  
				  
				  