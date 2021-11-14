$(function(){
    $('.home__slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.home__slider-adopt').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.skills__slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    vertical: true,
                    verticalSwiping: true
                }
            }
        ]
    })

    $('.menu__btn').on('click', function(){
        $('.menu__inner').slideToggle();
    });
});



// Плавные якоря
const anchors = document.querySelectorAll('.menu__list a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
  e.preventDefault()
   
  const blockID = anchor.getAttribute('href').substr(1)
   
  document.getElementById(blockID).scrollIntoView({
  behavior: 'smooth',
  block: 'start'
  })
  })
}