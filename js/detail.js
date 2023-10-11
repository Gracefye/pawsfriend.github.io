"use strict";

// get button element
const deals_l = document.getElementById('deals-l');
const deals_r = document.getElementById('deals-r');
const toys_l = document.getElementById('toys-l');
const toys_r = document.getElementById('toys-r');
const related_l = document.getElementById('related-l');
const related_r = document.getElementById('related-r');

// get box element
const deals_box = document.getElementById("deals-box");
const toys_box = document.getElementById("toys-box");
const related_box = document.getElementById('related-box');

// get ul element
const deals_lists = document.getElementById('deals-lists');
const toys_lists = document.getElementById('toys-lists');
const related_lists = document.getElementById('related-lists');

// deals lists
show_hide(deals_box, deals_l, deals_r);
scroll_list(deals_l, deals_lists, -400);
scroll_list(deals_r, deals_lists, 400);

// toys lists
show_hide(toys_box, toys_l, toys_r);
scroll_list(toys_l, toys_lists, -400);
scroll_list(toys_r, toys_lists, 400);

// related lists
show_hide(related_box, related_l, related_r);
scroll_list(related_l, related_lists, -400);
scroll_list(related_r, related_lists, 400);