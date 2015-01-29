$( document ).ready(function() {
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
});