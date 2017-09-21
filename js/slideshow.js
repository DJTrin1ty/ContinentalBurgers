$(function() {

    //configuration
    let width = 600;
    let animationSpeed = 2000;
    let pause = 4000;
    let currentSlide = 1;
    
    //cache DOM
    let $slider = $('.image-slider');
    let $slideContainer = $slider.find('.slides');
    let $slides = $slideContainer.find('.slide');

    setInterval(function() {
        $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
            currentSlide++;
            if(currentSlide === $slides.length) {
                currentSlide = 1;
                $slideContainer.css('margin-left', 0);
            }
        });
    }, pause);

});