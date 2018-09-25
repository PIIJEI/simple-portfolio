//Add Script to change bottom chat box position to -50px

//#toggle_view a
//#chat_bubble > .bubble-active on toggle

//#close_bubble
//#minimise_bubble_toggle

// $(document).ready(function(){
(function($) {
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
  var count = 0;
  function introCount(e) {
    if(count === 0) {
      count++;
    } else if(count > 100) {
      count = 100;
      $('#home_intro').delay(300).fadeOut(100);
      $('.home_content_container').fadeIn(2000);

    }
    $('#counter_content').text(count++);
  }
  setInterval(introCount, 25);

  //content main index fadeIn when introCount() completed fadeOut
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
