var slideIndex = [1, 1];
var slideId = [
  "journal-slider-img",
  "journal-slider-img-1",
  "journal-slider-img-2",
  "journal-slider-img-3",
  "journal-slider-img-4",
  "journal-slider-img-5"
];
showDivs(1, 0);
showDivs(1, 1);
showDivs(0, 2);
showDivs(0, 3);
showDivs(0, 4);
showDivs(0, 5);

function plusDivs(n, no) {
  showDivs((slideIndex[no] += n), no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
