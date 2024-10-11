var swiper = new Swiper(".mySwiper", {
  effect: "fade",

  pagination: {
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
