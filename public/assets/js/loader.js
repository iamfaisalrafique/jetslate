/**
 * Sequential script loader for the Agenio template.
 * 
 * Loads vendor libraries in dependency order, then initializes main.js.
 * This replaces the Next.js <Script> tags which load in parallel and
 * cause race conditions (main.js fires before jQuery/GSAP are ready).
 */
(function () {
  'use strict';

  var scripts = [
    '/assets/js/plugins/jquery.min.js',
    '/assets/js/plugins/bootstrap.min.js',
    '/assets/js/plugins/metismenu.js',
    '/assets/js/vendor/jqueryui.js',
    '/assets/js/vendor/waypoint.js',
    '/assets/js/plugins/swiper.js',
    '/assets/js/plugins/gsap.min.js',
    '/assets/js/plugins/scrolltigger.js',
    '/assets/js/plugins/smoothscroll.js',
    '/assets/js/vendor/split-text.js',
    '/assets/js/vendor/split-type.js',
    '/assets/js/vendor/wow.js',
    '/assets/js/vendor/text-plugin.js',
    '/assets/js/plugins/odometer.js',
    '/assets/js/plugins/contact-form.js',
    '/assets/js/main.js'
  ];

  var index = 0;

  function loadNext() {
    if (index >= scripts.length) return;

    var script = document.createElement('script');
    script.src = scripts[index];
    script.onload = function () {
      index++;
      loadNext();
    };
    script.onerror = function () {
      console.warn('[loader] Failed to load: ' + scripts[index]);
      index++;
      loadNext();
    };
    document.body.appendChild(script);
  }

  // Start loading after the DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNext);
  } else {
    loadNext();
  }
})();
