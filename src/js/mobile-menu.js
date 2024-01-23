const hamburger = document.querySelector('.main-nav__toggle');

if (hamburger) {
    const menu = document.querySelector('.main-nav__content');
    const header = document.querySelector('.header-main');
    const phone = document.querySelector('.main-nav__number');

    hamburger.addEventListener("click", function(e){
        document.body.classList.toggle('body--lock');
        hamburger.classList.toggle('header__toggle--active');
        menu.classList.toggle('main-nav__content--active');
        header.classList.toggle('header-main--active');
        phone.classList.toggle('main-nav__number--active');
    });
};