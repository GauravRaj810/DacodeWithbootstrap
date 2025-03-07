
// fixing header 
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    
    if (window.scrollY > 50) { // Change color after scrolling 50px
      navbar.style.background = '#ffffff'; // White background when scrolled
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'; // Optional: add shadow for better UI
    } else {
      // Reset to original background based on screen size
      if (window.innerWidth < 992) {
        navbar.style.background = '#d9fff4'; // Mobile background
      } else {
        navbar.style.background = '#ffffff'; // Desktop background
      }
      navbar.style.boxShadow = 'none';
    }
  });
});



// var swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });



// Initialize Swiper for active tab on page load
var activeTabId = document.querySelector('.tab-pane.active').id;
initSwiper('#' + activeTabId + ' .swiper-container');

// Initialize Swiper when tab is clicked
document.querySelectorAll('[data-bs-toggle="pill"]').forEach(function(tabEl) {
  tabEl.addEventListener('shown.bs.tab', function (event) {
    var targetTabId = event.target.getAttribute('data-bs-target');
    initSwiper(targetTabId + ' .swiper-container');
  });
});

// Function to initialize Swiper
function initSwiper(selector) {
  var swiper = new Swiper(selector, {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: selector + ' .swiper-button-next',
      prevEl: selector + ' .swiper-button-prev'
    },
    loop: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    breakpoints: {
      // when window width is <= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is <= 576px
      576: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });
}





