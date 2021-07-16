$(function () {
  $('#circle').click(function() {
    $('#circle').fadeOut(0);
    setTimeout(function() {
     $('#upper-modal').slideUp(900);
    }, 400);
    setTimeout(function() {
      $('#close-btn').fadeIn(0);
     }, 1000);
  });
  $('#close-btn').click(function() {
    $('#close-btn').fadeOut(0);
    $('#upper-modal').slideDown(600);
    setTimeout(function() {
      $('#circle').fadeIn(0)
    }, 800);
  });
});