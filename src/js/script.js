$(document).ready(function(){ 

    $('.reviews__slider').slick({
        speed: 1500,
        dots: true,
        adaptiveHeight:true,
        prevArrow: '<button type="button" class="slick-prev"><img src= "../img/icons/slider-arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src= "../img/icons/slider-arrow-right.svg"></button>'
      });

    $('ul.volume__tabs').on('click', 'li:not(.volume__tab_active)', function() {
        $(this)
          .addClass('volume__tab_active').siblings().removeClass('volume__tab_active')
          .closest('div.container').find('div.volume__content').removeClass('volume__content_active').eq($(this).index()).addClass('volume__content_active');
    });

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
  
    });
    });
  
    $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks').fadeOut('slow');

    
});

