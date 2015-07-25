$(document).ready(function () {
    //#main-slider
    $(function () {
        $('#main-slider').carousel({
            interval: 3000
        });
    });

    // Login
    $('#login-trigger').click(function () {
        $(this).next('#login-content').slideToggle();
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;');
        else $(this).find('span').html('&#x25BC;');
    });

    /* ----------------- Page navigation start --------------------- */
    $('#topnav li').click(function () {
        $('a').removeClass('SelectedTab');
        $(this).find('a').addClass('SelectedTab');
    });
    $('#secondMenu').click(function () {
        $(this).toggleClass('active');
    });
    $('#secondMenu .animenu__nav__child li').click(function () {
        $('li').removeClass('selected');
        $(this).addClass('selected');
    });
    $('#menuBtn').click(function () {
        $(this).toggleClass('selected');
        $('.menuItems').toggleClass('showMenu');
        //$('#headerLogo').toggleClass('hideLogo');
    });
    $('.menuItems li').click(function () {
        $('li').removeClass('active');
        $(this).addClass('active');
        $('#menuBtn').toggleClass('selected');
        $('.menuItems').toggleClass('showMenu');
        //$('#headerLogo').toggleClass('hideLogo');
    });
    /* ----------------- Page navigation end --------------------- */

    $(window).scroll(function () {
        var widScroll = $(document).scrollTop();
        if (widScroll >= 109) {
            $('#header').fadeOut(500);
            $('#header1').fadeIn(500);
        } else {
            $('#header1').fadeOut(500);
            $('#header').fadeIn(500);
            
        }
    });

    $('#secondMenu2').click(function () {
        $(this).toggleClass('active');
    });
    $('#menuBtn2').click(function () {
        $(this).toggleClass('selected');
        $('.menuItems2').toggleClass('showMenu');
        //$('#headerLogo').toggleClass('hideLogo');
    });
    $('.menuItems2 li').click(function () {
        $('li').removeClass('active');
        $(this).addClass('active');
        $('#menuBtn2').toggleClass('selected');
        $('.menuItems2').toggleClass('showMenu');
        //$('#headerLogo').toggleClass('hideLogo');
    });

    $('body').append('<div id="toTop" class="btn btn-info"><i class="fa fa-arrow-up"></i></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});
