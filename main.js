console.log('Starrt');

const menuBtn = document.querySelector('.header__menu-btn');
const menuClose = document.querySelector('.menu-mobile__close');
const menuMobile = document.querySelector('.menu-mobile');
const menuList = document.querySelector('.menu-mobile__list');

menuBtn.addEventListener('click', () => {
  menuList.classList.add('menu-mobile__list--open');
});

menuClose.addEventListener('click', () => {
  menuList.classList.remove('menu-mobile__list--open');
});