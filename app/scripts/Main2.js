/**
 * Created by pratik.borde on 17/03/2016.
 */
// Login Form

$(function() {
  var button = $('#loginButton');
  var box = $('#loginBox');
  var form = $('#loginForm');
  button.removeAttr('href');
  button.mouseup(function(login) {
    box.toggle();
    button.toggleClass('active');
  });
  form.mouseup(function() {
    return false;
  });
  $(this).mouseup(function(login) {
    if(!($(login.target).parent('#loginButton').length > 0)) {
      button.removeClass('active');
      box.hide();
    }
  });
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
  $('.navbar-toggle:visible').click();
});
