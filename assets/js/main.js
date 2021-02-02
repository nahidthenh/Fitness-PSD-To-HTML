$(document).ready(function($){
	"use strict";
	
	// WOW Js Active
	new WOW().init();
    
	
	$('.video-play').magnificPopup({
		type: 'iframe'
	});
	
	
	
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1000:{
				items:3,
			}
		}
	})
	
	
	/* scrollUp Minimum setup */
	$(function () {
		$.scrollUp();
	});
	
}(jQuery));