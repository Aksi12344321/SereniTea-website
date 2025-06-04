import Swiper from "swiper/bundle";

function swiper() {
  const swiper = new Swiper(".swiper", {
    // slidesPerView: 5,
    slidesPerView: "auto",
    spaceBetween: 12,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // dynamicBullets: true,
    },

    breakpoints: {
      840: {
        spaceBetween: 24,
      },
    },

    // Navigation arrows
    // navigation: {
    // 	nextEl: '.swiper-button-next',
    // 	prevEl: '.swiper-button-prev',
    // },
  });
}

export default swiper;
