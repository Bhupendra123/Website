$(document).ready(function () {
    function initialize() {
        var myLatlng = new google.maps.LatLng(28.6139, 77.2090);
        var mapOptions = {
            zoom: 13,
            center: myLatlng
        }
        var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Hello World!'
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);

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


