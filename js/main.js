$(document).ready(function() {

    $('.next').click(nextslide);
    $('.prev').click(prevslide);




    function nextslide() {
        if ($('.images img.active').hasClass('last')) {

            $('.images img.active').removeClass('active');
            $('.images img.first').addClass('active');
        }else {
            var imgAttiva = $('.images img.active');
            var prossImmagine = $('.images img.active').next();

            imgAttiva.removeClass('active');
            prossImmagine.addClass('active');
        }
    };


    function prevslide() {

        if ($('.images img.active').hasClass('first')) {

            $('.images img.active').removeClass('active');
            $('.images img.last').addClass('active');
        }else {
            var imgAttiva = $('.images img.active');
            var prossImmagine = $('.images img.active').prev();

            imgAttiva.removeClass('active');
            prossImmagine.addClass('active');
        }

    };











});
