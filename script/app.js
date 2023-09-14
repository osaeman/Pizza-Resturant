// Splide Js
document.addEventListener("DOMContentLoaded", function () {
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

  // Switching Menus
  const menu_img = document.querySelector(".menu-img");
  const menu_btn = document.querySelectorAll(".btn-flip");

  menu_btn.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log("osma");
      const menu = e.target.id;

      switch (menu) {
        case "pizza":
          menu_img.src = "./assets/pizza.PNG";
          break;
        case "pasta":
          menu_img.src = "./assets/pasta.PNG";
          break;
        case "chips":
          menu_img.src = "./assets/chips.PNG";
          break;
        case "wings":
          menu_img.src = "./assets/wings.PNG";
          break;
        case "drinks":
          menu_img.src = "./assets/drinks.PNG";
          break;
        case "desserts":
          menu_img.src = "./assets/desserts.PNG";
          break;
        case "deals":
          menu_img.src = "./assets/deals.PNG";
          break;
        default:
          menu_img.src = "./assets/pizza.PNG";
      }
    });
  });
});
