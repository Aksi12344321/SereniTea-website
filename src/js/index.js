// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
/* import "swiper/css/bundle"; */

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 24,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  /*   // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }, */
});

//Закрытие тэглайна

import tagline from "./modules/tagline.js";
tagline();
// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();
