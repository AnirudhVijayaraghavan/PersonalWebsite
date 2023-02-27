// Trying out ScrollMagic
$(document).ready(function () {
    var controller = new ScrollMagic.Controller();
  
    var ourScene = new ScrollMagic.Scene({
      triggerElement: '#scrollmag'
    })
    .setClassToggle('#scrollmag', 'fade-in')
    .addTo(controller);
  });
  