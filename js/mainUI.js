$(document).ready(function () {
    //#main-slider
    $(function () {
        $('#main-slider').carousel({
            interval: 3000
        });
    });

    //goto top
    $('.gototop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    });

    // How can YOU Benefit from kRADb
    var total_tabs = 4;
    var content_height = 300;
    jQuery("#htabs .htabs-content-wrap").scrollTop(0);

    $("#htabs .tabs li").hover(function () {
        if (jQuery(this).hasClass('active') == false) {
            jQuery("#htabs .tabs li").removeClass('active');
            jQuery(this).addClass('active');
            for (i = 1; i <= total_tabs; i++)
                if (jQuery(this).hasClass('tab' + i) == true) {
                    jQuery("#htabs .htabs-content-wrap").stop().animate({ scrollTop: content_height * (i - 1) }, 500);
                }
        }
    });

    // Login
    $('#login-trigger').click(function () {
        $(this).next('#login-content').slideToggle();
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;');
        else $(this).find('span').html('&#x25BC;');
    });
	
	/* ----------------- Page navigation start --------------------- */
	$('#topnav li').click(function(){
		$('a').removeClass('SelectedTab');
		$(this).find('a').addClass('SelectedTab');
	});
	$('#secondMenu').click(function(){
		$(this).toggleClass('active');
	});
	$('#secondMenu .animenu__nav__child li').click(function(){
		$('li').removeClass('selected');
		$(this).addClass('selected');
	});
	/* ----------------- Page navigation end --------------------- */
});