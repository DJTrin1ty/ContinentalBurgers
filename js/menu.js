$(document).ready(function() {      
    $('.breakfast-btn').click(function() {
        $('.breakfast').siblings().removeClass('reveal');
        $('.breakfast').addClass('reveal');
        $('#modalBtn').addClass('reveal');
    })
    $('.burgers-btn').click(function() {
        $('.burgers').siblings().removeClass('reveal');
        $('.burgers').addClass('reveal');
        $('#modalBtn').addClass('reveal');
    })
    $('.platters-btn').click(function() {
        $('.platters').siblings().removeClass('reveal');
        $('.platters').addClass('reveal');
        $('#modalBtn').addClass('reveal');
    })
    $('.sideorders-btn').click(function() {
        $('.side-orders').siblings().removeClass('reveal');
        $('.side-orders').addClass('reveal');
        $('#modalBtn').addClass('reveal');
    })
});


    
