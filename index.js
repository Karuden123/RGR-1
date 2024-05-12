


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true, 
    slidesPerView: 1,
    allowTouchMove: true,
    slideToClickedSlide: true,
    freeMode: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      // mobile + tablet - 320-990
      375: {
        slidesPerView: 1,
        
      },
    }
  });



  document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const headerNavItemsLeft = document.querySelector('.header__nav-items-left');
    const headerNavItemsRight = document.querySelector('.header__nav-items-right');
    const header = document.querySelector('.header__nav-items')
    const logo = document.querySelector('.header__logo')
    const burgerElem = document.querySelector('.burger__elem')
  
  
  
    burgerMenu.addEventListener('click', () => {
      headerNavItemsLeft.classList.toggle('active');
      headerNavItemsRight.classList.toggle('active');
      burgerMenu.classList.toggle('cross');
      header.classList.toggle('active')
      logo.classList.toggle('active')
  
    });
  });