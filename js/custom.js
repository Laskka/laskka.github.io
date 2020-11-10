$(window).load(function(){

	"use strict";
	

	/* ========================================================== */
	/*   LayerSlider                                              */
	/* ========================================================== */
	$(function(){
	
		// Calling LayerSlider on the target element with adding custom slider options
		$('#layerslider, #layerslider2').layerSlider({
			autoStart: true,
			pauseOnHover: true,
			navPrevNext: false,
			navButtons: true,
			navStartStop: true,
			thumbnailNavigation: false,
			autoPlayVideos: false,
			firstLayer: 1,
			skin: 'borderlesslight',
			skinsPath: 'lib/layerslider/skins/'
 
			// Please make sure that you didn't forget to add a comma to the line endings
			// except the last line!
		});
	
	});
 
	
	/* ========================================================== */
	/*   Popup-Gallery                                            */
	/* ========================================================== */
	$('.popup-gallery').find('a.popup1').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
	
	$('.popup-gallery').find('a.popup2').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
 
	$('.popup-gallery').find('a.popup3').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
 
	$('.popup-gallery').find('a.popup4').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:false
		}
	}); 
 
	
	/* ========================================================== */
	/*   SmoothScroll                                             */
	/* ========================================================== */
	
	$(".nav li a, a.scrool").click(function(e){
		
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		
		$('html,body').animate({scrollTop:target_top -69}, 1000);
			return false;
		
	});


	/* ========================================================== */
	/*   Testimonials                                             */
	/* ========================================================== */
	$(".rslides").responsiveSlides({
		auto: true,
		pager: false,
		nav: true,
		pause: true,
		speed: 500,
		timeout: 5000,
		namespace: "callbacks",
		before: function () {
		  $('.events').append("<li>before event fired.</li>");
		},
		after: function () {
		  $('.events').append("<li>after event fired.</li>");
		}
	});
	
	
	/* ========================================================== */
	/*   Contact                                                  */
	/* ========================================================== */
	$('#contact-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="contact_names"]').val(),
					'email':$('input[name="contact_email"]').val(),
					'message':$('textarea[name="contact_message"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p').show();
					});
				});
				e.preventDefault();
			}
		});
	})

	
	/* ========================================================== */
	/*   Newsletter                                               */
	/* ========================================================== */
	$('.newsletter_info .newsletter_form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'email':$('input[name="nf_email"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.newsletter_success_box').show();
					});
				});
				e.preventDefault();
			}
		});
	});	
	
	
});