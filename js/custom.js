/*============================================
	* Author		: # name#
	* Template Name : name | HTML Template
	* version		:1.0
	
==============================================
*========== TABLE OF CONTENTS ================

    0.1 WoW js 
    0.2 Preloader Js
	0.3 client-silder
	0.4 Testimonial-silder
	0.5 Parallaxie Js
	0.6 MB-Screen-Slider
	0.7 Navbar Background Change 
	0.8 Use smooth scrolling when clicking on navigation 
	0.9 Scroll To Top

========================================*/

$(document).ready(function () {
    "use strict";


    /*--------------------------------
    0.1 Preloader Js
----------------------------------*/
    $(function () {
        $(window).on("load", function () {
            $('.preloader').fadeOut(500);
        });
    });
    /*--------------------------------
     	 0.2 WoW js 
    ----------------------------------*/
    new WOW().init({

    });

    /*--------------------------------
     	0.3 client-silder
    ----------------------------------*/
    $('.client-slider').owlCarousel({
        loop: true,
        items: 6,
        margin: 30,
        responsiveClass: true,
        dots: false,
        nav: true,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<div class="prev"><i class="fas fa-arrow-left"></i></div>', '<div class="next"><i class="fas fa-arrow-right"></i></div>'],
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });

    /*--------------------------------
     	0.4 Testimonial-silder
    ----------------------------------*/
    $('.testimonial').owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        responsiveClass: true,
        dots: false,
        nav: true,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<div class="prev"><i class="fas fa-arrow-left"></i></div>', '<div class="next"><i class="fas fa-arrow-right"></i></div>'],
    });
    /*--------------------------------
    	 	0.5 Parallaxie Js
    ----------------------------------*/
    $('.banner-section').parallaxie({
        speed: 0.9,
        size: "100%",
        offset: 0,
    });
    $('.pricing-section').parallaxie({
        speed: 0.9,
        size: "100%",
        offset: 0,
    });
    $('.team-sub-section').parallaxie({
        speed: 0.9,
        size: "100%",
        offset: 0,
    });
    /*--------------------------------
     	0.6 MB-Screen-Slider
    ----------------------------------*/
    $('.mb-screen-slider').owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        responsiveClass: true,
        dots: false,
        nav: true,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ['<div class="prev"><i class="fas fa-arrow-left"></i></div>', '<div class="next"><i class="fas fa-arrow-right"></i></div>'],
    });
    /*--------------------------------
     	0.7 Navbar Background Change
    ----------------------------------*/
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > 50) {
            $(".navbar").css({
                "background": "rgba(19,143,195, 1)",
                "transition": ".5s"
            });
        } else {
            $(".navbar").css("background", "transparent");
        }
    });

    /*--------------------------------
      0.8	Use smooth scrolling when clicking on navigation
    ----------------------------------*/
    $(function () {
        var topoffset = 50; //variable for menu height
        $('.main-menu a').click(function () {
            if (location.pathname.replace(/^\//, '') ===
                this.pathname.replace(/^\//, '') &&
                location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - topoffset
                    }, 1000);
                    return false;
                } //target.length
            } //click function
        }); //smooth scrolling

    });
    
});

/*--------------------------------
 	0.9 scroll-to-top 
----------------------------------*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});



