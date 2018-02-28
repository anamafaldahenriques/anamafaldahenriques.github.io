var navWrapper = document.getElementById("mobile-nav-wrapper");
var icon = document.getElementsByClassName("open-icon")[0];
var pageList = document.getElementsByClassName("page-list")[0];

jQuery.fn.fadeThenToggle = function(speed, easing, callback) {
  if (this.is(":hidden")) {
    return this.slideDown(speed, easing).fadeTo(speed, 1, easing, callback);
  } else {
    return this.fadeTo(speed, 0, easing).slideUp(speed, easing, callback);
  }
};

function showMenu() {
  if (navWrapper.classList.contains("nav-mobile-wrapper-light")) {
    $(pageList).fadeThenToggle();
    navWrapper.classList.remove("nav-mobile-wrapper-light");
    icon.style.transform = "rotate(0deg)";
  } else {
    $(pageList).fadeThenToggle();
    navWrapper.classList.add("nav-mobile-wrapper-light");
    icon.style.transform = "rotate(45deg)";
  }
}

// project page open

var description = document.getElementsByClassName("description-extended")[0];
var readButton = document.getElementsByClassName("read-more")[0];

function openDescription() {
  if (description.style.display == "" || description.style.display == "none") {
    $(description).fadeThenToggle();
    readButton.innerHTML = "Show Less -";
  } else {
    $(description).fadeThenToggle();
    readButton.innerHTML = "Read More +";
  }
}

// Go to top

$("#scrollTop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});
