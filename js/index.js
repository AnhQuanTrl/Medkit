(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

})(jQuery); // End of use strict

//set height and padding-top for header
document.getElementById("page-top").style.height = window.innerHeight + "px";
document.getElementById("page-top").style.paddingTop = document.getElementById("top-bar").clientHeight + "px";

//set height for section;
var sectionList = document.getElementsByTagName("SECTION");
for (var i = 0; i < sectionList.length; i++) {
    sectionList[i].style.height = window.innerHeight - document.getElementById("top-bar").clientHeight + "px";
}
