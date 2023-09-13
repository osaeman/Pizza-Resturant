// Splide Js
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splideOne", {
    type: "loop",
    perPage: 3,
    focus: "center",
    autoplay: true,
    interval: 3000,
    updateOnMove: true,
    pagination: false,
    padding: "0",
    throttle: 300,
    breakpoints: {
      768: {
        perPage: 1,
        padding: "0",
      },
      1024: {
        perPage: 3,
        padding: "0",
      },
    },
  }).mount();
  new Splide("#splideTwo", {
    type: "loop",
    perPage: 3,
    focus: "center",
    autoplay: true,
    interval: 3000,
    updateOnMove: true,
    pagination: false,
    padding: "0",
    throttle: 300,
    breakpoints: {
      768: {
        perPage: 1,
        padding: "0",
      },
      1024: {
        perPage: 3,
        padding: "0",
      },
    },
  }).mount();

  new Splide("#splideThree", {
    type: "loop",
    perPage: 3,
    focus: "center",
    autoplay: true,
    interval: 3000,
    updateOnMove: true,
    pagination: false,
    padding: "0",
    throttle: 300,
    breakpoints: {
      768: {
        perPage: 1,
        padding: "0",
      },
      1024: {
        perPage: 3,
        padding: "0",
      },
    },
  }).mount();
  new Splide("#splideFour", {
    type: "loop",
    perPage: 3,
    focus: "center",
    autoplay: true,
    interval: 3000,
    updateOnMove: true,
    pagination: false,
    padding: "0",
    throttle: 300,
    breakpoints: {
      768: {
        perPage: 1,
        padding: "0",
      },
      1024: {
        perPage: 3,
        padding: "0",
      },
    },
  }).mount();
  new Splide("#splideFive", {
    type: "loop",
    perPage: 3,
    focus: "center",
    autoplay: true,
    interval: 3000,
    updateOnMove: true,
    pagination: false,
    padding: "0",
    throttle: 300,
    breakpoints: {
      768: {
        perPage: 1,
        padding: "0",
      },
      1024: {
        perPage: 3,
        padding: "0",
      },
    },
  }).mount();
  //   Swiper Js
  // Main Swiper
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,
    speed: 3500,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
      reverseDirection: true,
    },
    controller: {
      inverse: true,
    },
    // Navigation arrows
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // Pop Up Appearing
  // script.js
  const popupOverlay = document.querySelector(".popup-overlay");
  const popupContainer = document.querySelector(".popup-container");
  const closePopupButton = document.getElementById("close-popup");

  function openPopup() {
    popupOverlay.style.display = "flex";
    setTimeout(() => {
      popupContainer.style.opacity = "1";
      popupContainer.style.transform = "scale(1)";
    }, 100);
  }

  function closePopup() {
    popupContainer.style.opacity = "0";
    popupContainer.style.transform = "scale(0.8)";
    setTimeout(() => {
      popupOverlay.style.display = "none";
    }, 300);
  }

  // Automatically open the popup when the page loads
  window.addEventListener("load", openPopup);

  closePopupButton.addEventListener("click", closePopup);
});
