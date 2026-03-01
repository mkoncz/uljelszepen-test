$(document).ready(function() {
  
  // nivo-slider
  $('#slider').nivoSlider({
    effect: 'fold',
    animSpeed: 700,
    pauseTime: 3500,
    startSlide: 0,
    directionNav: false,
    controlNav: false,
    controlNavThumbs: false,
    pauseOnHover: true
  });
  
  // nivo lightbox
  $('.nivoLightbox').nivoLightbox({
    theme: 'default',
    keyboardNav: true,
    clickOverlayToClose: true,
    errorMessage: 'Hiba a betöltés közben!'
  }); 
  
  // fullheight
  var windowHeight = $(window).height();
  var middleHeight = $('#middle').height();
  if (middleHeight < windowHeight)
  {
    $('#middle').css('min-height', windowHeight);
  }                    
});