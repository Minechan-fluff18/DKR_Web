$(function () {

    'use strict';


    var myHeader = $('.header');

    myHeader.height($(window).height() + 100);

    $(window).resize(function () {

        myHeader.height($(window).height() + 100);



    });
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
var owl = $('.owl-carousel');
owl.owlCarousel();
$('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
})
$('.customPrevBtn').click(function () {

    owl.trigger('prev.owl.carousel', [300]);
});


$('a').click(function () {

    $('html, body').animate({

        scrollTop: $('#' + $(this).data('value')).offset().top

    }, 1000);

    window.console.log('#' + $(this).data('value'));

});