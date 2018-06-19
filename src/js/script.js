//Add Script to change bottom chat box position to -50px

//#toggle_view a
//#chat_bubble > .bubble-active on toggle

//#close_bubble
//#minimise_bubble_toggle

$(document).ready(function(){
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
});
