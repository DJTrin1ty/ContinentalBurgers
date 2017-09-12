$(document).ready(function(){
  $("#home").click(function() {
      $('html, body').animate({
          scrollTop: $(".jumbotron").offset().top
      }, 500);
  });
  $("#about").click(function() {
      $('html, body').animate({
          scrollTop: $(".about").offset().top
      }, 500);
  });
  $("#menu").click(function() {
      $('html, body').animate({
          scrollTop: $(".menu").offset().top
      }, 500);
  });
  $("#contact").click(function() {
      $('html, body').animate({
          scrollTop: $(".contact").offset().top
      }, 500);
  });
})

function navbarMe(){
  let $w = $(window);
  let docViewTop = $w.scrollTop();
  let docViewBot = docViewTop + $w.height();

  $nt = $('.about');
  let ntViewTop = $nt.offset().top + 50;
  if (ntViewTop < docViewBot){
    $('nav').addClass("nav-appear");
    $('nav div').addClass("faded");
  } else {
    $('nav').removeClass("nav-appear");
    $('nav div').removeClass("faded");
  }
}

window.addEventListener('scroll', navbarMe);
