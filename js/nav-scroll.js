$(document).ready(function(){
  $("#home").click(function(){
      $('html, body').animate({
          scrollTop: $(".jumbotron").offset().top
      }, 500);
  });
  $("#about").click(function(){
      $('html, body').animate({
          scrollTop: $(".about").offset().top
      }, 500);
  });
  $("#menu").click(function(){
      $('html, body').animate({
          scrollTop: $(".menu").offset().top
      }, 500);
  });
  $("#contact").click(function(){
      $('html, body').animate({
          scrollTop: $(".contact").offset().top
      }, 500);
  });
})
