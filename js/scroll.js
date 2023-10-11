"use strict";

// create function to make buttons dynamic
function show_hide(box, prev, next) {
  box.addEventListener('mouseenter', function () {
    prev.style.display = "block";
    next.style.display = "block";
  })
  box.addEventListener('mouseleave', function () {
    prev.style.display = "none";
    next.style.display = "none";
  })
}

// create function to scroll lists
function scroll_list(left, lists, n) {
  left.addEventListener('click', function () {
    lists.scrollBy({
      left: n,
      behavior: "smooth"
    });
  })
}
