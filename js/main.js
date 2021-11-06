$(function(){
  $('.slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/Arrow-left.svg" alt="Left-Arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/Arrow-right.svg" alt="Right-Arrow"></button>'
  }); 

  $('.menu__btn').on('click', function(){
      $('.menu__items').slideToggle();
  });
});