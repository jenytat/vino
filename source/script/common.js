$(document).ready(function(){
    $('.gallery-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1284,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1012,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 745,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.area__text a').click(function(){
        $('.form-area').addClass('active-form');
    });

    $('.map-area__wrap').click(function(){
        $('.form-block').addClass('active-form');
    });

    $('.map-area__wrap path').hover(function(){
        if($(this).attr('fill') == '#72A0BA'){
            $(this).css('fill', '#72BAB5');
        }
        if($(this).attr('fill') == '#E67E7E'){
            $(this).css('fill', '#72BAB5');
        }
        if($(this).attr('fill') == '#72BA79'){
            $(this).css('fill', '#72BAB5');
        }
    }, function(){
        $(this).removeAttr('style');
    });

    $(document).mouseup(function (e) {
        var div = $(".form-area__wrap");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.parent().removeClass('active-form');
        }
    });

    (function( $ ) {
        var phone1Href = $('#phone1').attr('href'); //-Тут телефон
        var phone1Cont = $('#phone1').html();
    
        var email1Href = $('#email1').attr('href'); //- Тут email
        var email1Cont = $('#email1').html();
    
        var $menu = $('#menu-left'),
        $html = $('html, body');
        $("#menu-left").mmenu({
    extensions: ["position-front"], // Это чтобы не сдвигался бэкграунд
    title: '<img src="/themes/adaptive_template_4/images/logo-white.png"/>', // Это вместо меню
             "navbars": [
          {
                        "position": "bottom",
                        "content": [
                            "<a href=" + phone1Href + " class='phone-left'>" + phone1Cont + "</a>",
                            "<a href=" + email1Href + " class='email-left'>" + email1Cont + "</a>"
                        ]
          }
       ]
       },{
                "language":"ru"
            });
    
    });

    ymaps.ready(init);

    function init(){
        var myMap = new ymaps.Map('map', {
            center: [54.895874, 19.944153],
            zoom: 12
        });

        var myPlacemark = new ymaps.Placemark(
            [54.895874, 19.944153], {
                hintContent: 'Синявкино'
            }, {
            iconLayout: 'default#image',
            iconImageHref: '/images/icon/map.svg',
            iconImageSize: [69, 88],
            iconImageOffset: [-35, -95]
        });

        myMap.geoObjects.add(myPlacemark);
    }
});
  