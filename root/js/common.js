$(document).ready(function(){
$(".owl-carousel").owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
  	items:1,
   	nav:true,
    autoplay: true,
    loop:true,
    dots: true,
  	navText: ' '
  });
$('.open-menu').on('click', function() {
     $('.overlay').addClass('open');
  });

  $('.close-menu').on('click', function() {
    $('.overlay').removeClass('open');
  }); 
new WOW().init();
});