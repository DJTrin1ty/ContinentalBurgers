$(document).ready(function() {      
    $('.breakfast-btn').click(function() {
        $('.breakfast').siblings().removeClass('reveal');
        $('.breakfast').addClass('reveal');
        $('.btn').addClass('reveal');
    })
    $('.burgers-btn').click(function() {
        $('.burgers').siblings().removeClass('reveal');
        $('.burgers').addClass('reveal');
        $('.btn').addClass('reveal');
    })
    $('.platters-btn').click(function() {
        $('.platters').siblings().removeClass('reveal');
        $('.platters').addClass('reveal');
        $('.btn').addClass('reveal');
    })
    $('.sideorders-btn').click(function() {
        $('.side-orders').siblings().removeClass('reveal');
        $('.side-orders').addClass('reveal');
        $('.btn').addClass('reveal');
    })
});


    
