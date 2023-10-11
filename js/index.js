"use strict";

// get button element
const deals_l = document.getElementById('deals-l');
const deals_r = document.getElementById('deals-r');
const toys_l = document.getElementById('toys-l');
const toys_r = document.getElementById('toys-r');

// get box element
const deals_box = document.getElementById("deals-box");
const toys_box = document.getElementById("toys-box");

// get ul element
const deals_lists = document.getElementById('deals-lists');
const toys_lists = document.getElementById('toys-lists');

// deals lists
show_hide(deals_box, deals_l, deals_r);
scroll_list(deals_l, deals_lists, -400);
scroll_list(deals_r, deals_lists, 400);

// toys lists
show_hide(toys_box, toys_l, toys_r);
scroll_list(toys_l, toys_lists, -400);
scroll_list(toys_r, toys_lists, 400);