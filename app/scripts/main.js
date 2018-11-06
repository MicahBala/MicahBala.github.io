'use strict';

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
// let menuNav = document.querySelector('.menu-nav');
// let navItems = document.querySelectorAll('.van-item');

// Set Initial State of menu
let showMenu = false;
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');

    showMenu = true;
    // menuNav.classList.add('show');
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');

    showMenu = false;
  }
}

menuBtn.addEventListener('click', toggleMenu);
