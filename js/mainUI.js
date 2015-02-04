$(document).ready(function() {
	//#main-slider
	$(function(){
		$('#main-slider').carousel({
			interval: 3000
		});
	});
	
	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});
	// Login
	$('#login-trigger').click(function(){
		$(this).next('#login-content').slideToggle();
		$(this).toggleClass('active');          
		
		if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;');
		  else $(this).find('span').html('&#x25BC;');
    });
});