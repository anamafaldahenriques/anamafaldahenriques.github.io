var information = document.getElementsByClassName("work-in-progress");
var informationButton = document.getElementById("work-in-progress");
var graphic = document.getElementsByClassName("exhibition");
var graphicButton = document.getElementById("exhibition");
var product = document.getElementsByClassName("travel");
var productButton = document.getElementById("travel");
var allButton = document.getElementById("showAll");

jQuery.fn.fadeThenSlideToggle = function(speed, easing, callback) {
  if (this.is(":hidden")) {
  } else {
    return this.fadeTo(speed, 0, easing).slideUp(speed, easing, callback);
  }
};

function showInformation() {
  productButton.classList.remove("active-filter");
  graphicButton.classList.remove("active-filter");
  allButton.classList.remove("active-filter");
  informationButton.classList.add("active-filter");
  for (var i = 0; i < information.length; ++i) {
    var itemInformation = information[i];
    itemInformation.style.display = "block";
    itemInformation.style.opacity = "1";
  }
  for (var i = 0; i < graphic.length; ++i) {
    var itemGraphic = graphic[i];
    itemGraphic.style.display = "block";
    $(itemGraphic).fadeThenSlideToggle();
  }
  for (var i = 0; i < product.length; ++i) {
    var itemProduct = product[i];
    itemProduct.style.display = "block";
    $(itemProduct).fadeThenSlideToggle();
  }
}

function showGraphic() {
  productButton.classList.remove("active-filter");
  informationButton.classList.remove("active-filter");
  allButton.classList.remove("active-filter");
  graphicButton.classList.add("active-filter");
  for (var i = 0; i < graphic.length; ++i) {
    var itemGraphic = graphic[i];
    itemGraphic.style.display = "block";
    itemGraphic.style.opacity = "1";
  }
  for (var i = 0; i < information.length; ++i) {
    var itemInformation = information[i];
    itemInformation.style.display = "block";
    $(itemInformation).fadeThenSlideToggle();
  }
  for (var i = 0; i < product.length; ++i) {
    var itemProduct = product[i];
    itemProduct.style.display = "block";
    $(itemProduct).fadeThenSlideToggle();
  }
}

function showProduct() {
  graphicButton.classList.remove("active-filter");
  informationButton.classList.remove("active-filter");
  allButton.classList.remove("active-filter");
  productButton.classList.add("active-filter");
  for (var i = 0; i < product.length; ++i) {
    var itemProduct = product[i];
    itemProduct.style.display = "block";
    itemProduct.style.opacity = "1";
  }
  for (var i = 0; i < information.length; ++i) {
    var itemInformation = information[i];
    itemInformation.style.display = "block";
    $(itemInformation).fadeThenSlideToggle();
  }
  for (var i = 0; i < graphic.length; ++i) {
    var itemGraphic = graphic[i];
    itemGraphic.style.display = "block";
    $(itemGraphic).fadeThenSlideToggle();
  }
}

function showAll() {
  graphicButton.classList.remove("active-filter");
  informationButton.classList.remove("active-filter");
  productButton.classList.remove("active-filter");
  allButton.classList.add("active-filter");
  for (var i = 0; i < product.length; ++i) {
    var itemProduct = product[i];
    itemProduct.style.display = "block";
    itemProduct.style.opacity = "1";
  }
  for (var i = 0; i < information.length; ++i) {
    var itemInformation = information[i];
    itemInformation.style.display = "block";
    itemInformation.style.opacity = "1";
  }
  for (var i = 0; i < graphic.length; ++i) {
    var itemGraphic = graphic[i];
    itemGraphic.style.display = "block";
    itemGraphic.style.opacity = "1";
  }
}

// Mobile Navigation show

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
  if (navWrapper.classList.contains("nav-mobile-wrapper-dark")) {
    $(pageList).fadeThenToggle();
    navWrapper.classList.remove("nav-mobile-wrapper-dark");
    icon.style.transform = "rotate(0deg)";
  } else {
    $(pageList).fadeThenToggle();
    navWrapper.classList.add("nav-mobile-wrapper-dark");
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
