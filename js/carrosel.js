var swiper = new Swiper(".mySwiper", {
  effect: "fade",

  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".mySwiper-grupo-home", {
  slidesPerView: "auto",
  spaceBetween: 8,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-comunicacao", {
  slidesPerView: "auto",
  spaceBetween: 32,

  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".mySwiper-teams", {
  slidesPerView: "auto",
  spaceBetween: 8,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
