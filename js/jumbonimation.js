$(document).ready(function(){

  $('.left').animate({'left':'100%'})
  $('.right').animate({'right':'100%'})
  $('.icon').addClass('peek');

  $('.playgrounds h2').delay(1500).animate({'top':'13%'})

  setTimeout(function(){
    let delayer = 1000;
    $('.playgrounds span').each(function(){
      let temp = $(this);
      delayer += 150;
      setTimeout(function(){
        temp.addClass('reveal');
      }, delayer);
    })
  }, 2400);

  setTimeout(function(){
      $('.playgrounds h2').addClass('shadow');
  }, 5500);

  setTimeout(function(){
    $('.burger').addClass('revealer');
  }, 4500);
})
