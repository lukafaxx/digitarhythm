  $(document).ready(function() {
    // ----- Magnific Popup
  	$('.popup-youtube').magnificPopup({
  		disableOn: 0,
  		type: 'iframe',
      iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>',

        patterns: {
          youtube: {
            index: 'youtube.com/',
            id: 'v=',
            src: '//www.youtube.com/embed/%id%?autoplay=1&amp;autohide=0&amp;modestbranding=1&amp;fs=0&amp;iv_load_policy=3&amp;rel=0'
          }

        },

        srcAction: 'iframe_src',
      },
  		mainClass: 'mfp-fade',
  		removalDelay: 0,
  		preloader: false,
      fixedContentPos: false
  	});

    // ----- Lazy Load
    $(function() {
      $('div.module').lazyload({
        effect : 'fadeIn',
        threshold : 640
      });
    });

  });
