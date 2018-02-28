function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

var firstElement = document.getElementsByClassName('gallery-link')[0];

window.onload = function scrollAnimation() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $(window).scroll(function() {
      $('.gallery-link').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).addClass('gallery-in-view');
        } else {
          $(this).removeClass('gallery-in-view');
        }
      });
    });
  } else {
  }
}
