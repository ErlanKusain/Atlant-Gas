$(document).ready(function(){ 

    $('.reviews__slider').slick({
        speed: 1500,
        dots: true,
        adaptiveHeight:true,
        prevArrow: '<button type="button" class="slick-prev"><img src= "../img/icons/slider-arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src= "../img/icons/slider-arrow-right.svg"></button>',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              arrows: false,
            }
          },
        ]
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


function valideForms(form){
  $(form).validate({
    rules: {
      name: 'required',
      phone: 'required',
      email: {
        required:true,
        email:true,
      }
    },
    messages: {
      name: "Пожалуйста,введите своё имя",
      phone:'Пожалуйста,введите свой номер телефона',
      textarea:'Пожалуйста,напишите свой вопрос'
    }
  });
};

valideForms('#specialist-form');
valideForms('#consultation-form');

$('input[name=phone]').mask("+7 (999) 999-99-99");

$('form').submit(function(e) {
  e.preventDefault();

  if(!$(this).valid()) {
    return;
  };

  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    $('#consultation').fadeOut();
    $('.overlay, #thanks').fadeIn('slow');

    $('form').trigger('reset');
  });
  return false;
});



