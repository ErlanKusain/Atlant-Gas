$(document).ready(function(){ 

    $('ul.volume__tabs').on('click', 'li:not(.volume__tab_active)', function() {
        $(this)
          .addClass('volume__tab_active').siblings().removeClass('volume__tab_active')
          .closest('div.container').find('div.volume__content').removeClass('volume__content_active').eq($(this).index()).addClass('volume__content_active');
    });

});