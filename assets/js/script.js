'use strict';/** toggle
 */

const navOpenBtn = document.querySelector('[data-nav-open-btn]');
const navbar = document.querySelector('[data-navbar]');

const navCloseBtn = document.querySelector('[data-nav-close-btn]');

const overlay = document.querySelector('[data-overlay]');

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener('click', function () {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
  });
}

// toggle navbar

const navbarLinks = document.querySelectorAll('[data-navbar-link]');

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener('click', function () {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
  });
}

// data-gotop

// const header = document.querySelector('[data-header]');
const goTop = document.querySelector('[data-gotop]');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 400) {
    // header.classList.add('active');
    goTop.classList.add('active');
  } else {
    // header.classList.remove('active');
    goTop.classList.remove('active');
  }
});
