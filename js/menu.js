$(document).ready(function() {      
    $('.breakfast-btn').click(function() {
        $('.breakfast').siblings().removeClass('reveal');
        $('.breakfast').addClass('reveal');
    })
    $('.lunch-btn').click(function() {
        $('.lunch').siblings().removeClass('reveal');
        $('.lunch').addClass('reveal');
    })
    $('.dinner-btn').click(function() {
        $('.dinner').siblings().removeClass('reveal');
        $('.dinner').addClass('reveal');
    })
});


    
