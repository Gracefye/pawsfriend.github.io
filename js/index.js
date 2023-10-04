"use strict";

// get elements
const deals_l = document.querySelector('#deals-l');
const deals_r = document.querySelector('#deals-r');
const toys_l = document.querySelector('#toys-l');
const toys_r = document.querySelector('#toys-r');
const deals_box = document.querySelector("#deals-box");
const toys_box = document.querySelector("#toys-box");


// const item_lists = document.querySelector(".item-lists");
// const item_lists_width = item_lists.offsetWidth;

// add Mouse Event
deals_box.addEventListener('mouseenter', function () {
  deals_l.style.display = 'block';
  deals_r.style.display = 'block';
})

deals_box.addEventListener('mouseleave', function () {
  deals_l.style.display = 'none';
  deals_r.style.display = 'none';
})

toys_box.addEventListener('mouseenter', function () {
  toys_l.style.display = 'block';
  toys_r.style.display = 'block';
})

toys_box.addEventListener('mouseleave', function () {
  toys_l.style.display = 'none';
  toys_r.style.display = 'none';
})

// add click event
// arrow_r.addEventListener('click', function () {
//   animate(item_lists, 300);
// })

// arrow_l.addEventListener('click', function () {
//   animate(item_lists, -100);
// })

// animate function
function animate(obj, target) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    if (obj.offsetLeft >= target) {
      clearInterval(obj.timer);
    }
    obj.style.left = obj.offsetLeft + 88 + 'px';
  }, 30)
}

