(function($) {

  //general settings to be fixed later
  $('body').removeAttr('class');
  $('body').removeAttr('style');

  //Menu toggler - mobile
  var navOpen = false;
  if($(window).width() < 540) {

    $('.menu-toggler').on('click', function(){
      navOpen = !navOpen;

      var $navigation = '#32324d';

      if(navOpen) {
        $('.sidebar-about-nav').animate({left: '0'},0);
        $('body').css({
          'position': 'absolute',
          'overflow': 'hidden'
        });
        $('body').addClass('navOpen');
        $('.menu-toggler span').css({
          'background': $navigation,
          'margin-left': '5px'
        });
      } else {
        $('.sidebar-about-nav').animate({left: '-50%'},0);
        $('body').css({
          'position':'',
          'overflow': ''
        });
        $('body').removeClass('navOpen');
        $('.menu-toggler span').css({
          'background': '',
          'margin-left': '0'
        });
      }
    });

  }
  $(window).resize( function() {
    if($(window).width() >= 540) {
      $('body').removeAttr('class');
      $('body').removeAttr('style');
    } else if($('.sidebar-about-nav').css(left) == '-50%') {
      $('body').attr('class','navOpen');
      $('body').attr('style','position: absolute;');
    } else {
      $('body').removeAttr('class');
      $('body').removeAttr('style');
    }
  });


  //chatter box
  $('#toggle_view a').on('click', function(e){
    e.preventDefault();
    $('#chat_bubble').slideToggle(300).toggleClass('bubble-active');
  });
  $('#close_bubble').on('click', function(e){
    e.preventDefault();
    $('#chat_bubble').slideToggle(300).removeClass('bubble-active');
  });
  $('#minimise_bubble_toggle').on('click', function(){
    $('form#post_message').slideToggle(300);
  });

  //counter intro
  // var count = 0;
  // function introCount(e) {
  //   if(count === 0) {
  //     count++;
  //   } else if(count > 100) {
  //     count = 100;
  //     $('#home_intro').delay(300).fadeOut(100);
  //     $('.home_content_container').fadeIn(2000);

  //   }
  //   $('#counter_content').text(count++);
  // }
  // setInterval(introCount, 5);

  // //content main index fadeIn when introCount() completed fadeOut
  // $('.home_content_container').hide();


  //data-close="close-modal" / button data-click="close-modal"
  var closeModal_rsh = $('.modal-content-close').data({'click':'close-modal'});
  var openModal_idrsh = $('.recent-work--element');

  $('#modal-rw').hide();

  $(closeModal_rsh).on('click', function(){
    $('#modal-rw').fadeOut(200);
    $('body').removeAttr('style');
  });

  $(openModal_idrsh).each(function(){
    if($(this).attr('data-id')) {
      $(this).on('click', function(){
          $('body').css({
            'position' : 'fixed',
            'width' : '100%'
          });
          $('#modal-rw').fadeIn(200);
      });
    }
  });

  var navSocialIcons = $('#expand-social-toggle');
  $('.top-nav-social').hide();
  $('.hide-social').hide();

  navSocialIcons.on('click', function(){
    $('.trigger').toggle();
    $('.top-nav-social').animate({
      width:'toggle'
    }, 250);
  });


}(jQuery));
