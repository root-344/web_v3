$(function () {
 $('#circle').click(function() {
   $('#circle').fadeOut(0);
   setTimeout(function() {
    $('#upper-modal').slideUp(900);
   }, 400);
 });
});