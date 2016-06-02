$(function () {
    'use strict';

    var myheader = $('.header');

    myheader.height($(window).height());

    $(window).resize(function () {
        
        myheader.height($(window).height());
    });

    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // $(".bxslider").each(function () {
    //     $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
    // });

    $(".bxslider").bxSlider({
        pager: false
    });


    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 18
        }, 1000);
    });
});
