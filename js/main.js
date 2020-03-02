$(document).ready(function() {

    $('.next').click(nextslide);
    $('.prev').click(prevslide);

    var counter = 0;
    var clock = setInterval(nextslide, 2000);



    $('.images').mouseenter(function(){
        clearInterval(clock);
    });
    

    function nextslide() {
        if (counter == 2) {
            clearInterval(clock);
        }
        if ($('.images img.active').hasClass('last')) {
            counter++;
            console.log(counter);
            $('.images img.active').removeClass('active');
            $('.images img.first').addClass('active');


            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.first').addClass('active');
        }else {
            var imgAttiva = $('.images img.active');
            var prossImmagine = $('.images img.active').next();

            imgAttiva.removeClass('active');
            prossImmagine.addClass('active');


            var pallinoAttivo = $('.slider-nav i.active');
            var prossimaPallino = $('.slider-nav i.active').next();

            pallinoAttivo.removeClass('active');
            prossimaPallino.addClass('active');
        }
    };


    function prevslide() {

        if ($('.images img.active').hasClass('first')) {

            $('.images img.active').removeClass('active');
            $('.images img.last').addClass('active');

            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.last').addClass('active');
        }else {
            var imgAttiva = $('.images img.active');
            var prossImmagine = $('.images img.active').prev();

            imgAttiva.removeClass('active');
            prossImmagine.addClass('active');


            var pallinoAttivo = $('.slider-nav i.active');
            var prossimaPallino = $('.slider-nav i.active').prev();

            pallinoAttivo.removeClass('active');
            prossimaPallino.addClass('active');
        }

    };














});
