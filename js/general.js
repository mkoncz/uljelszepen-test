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
  
  // Dropdown menu kattintás kezelés
  $('#menu .dropdown > a').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var $dropdown = $(this).parent('.dropdown');
    var $dropdownContent = $dropdown.find('.dropdown-content');
    
    // Toggle dropdown
    if ($dropdownContent.hasClass('show')) {
      $dropdownContent.removeClass('show');
      $(this).removeClass('active');
    } else {
      // Close all other dropdowns
      $('.dropdown-content.show').removeClass('show');
      $('#menu .dropdown > a.active').removeClass('active');
      
      // Open this dropdown
      $dropdownContent.addClass('show');
      $(this).addClass('active');
    }
  });
  
  // Bezárás ha máshová kattintunk
  $(document).on('click', function(e) {
    if (!$(e.target).closest('#menu .dropdown').length) {
      $('.dropdown-content.show').removeClass('show');
      $('#menu .dropdown > a.active').removeClass('active');
    }
  });
  
  // Ne záródjon be ha a dropdown-ra kattintunk
  $('#menu .dropdown-content').on('click', function(e) {
    e.stopPropagation();
  });
});