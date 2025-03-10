
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



// mulitple img swiper using swiper js lib ... 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  },
});






// preloader
const preloader = document.querySelector(".preloader");  // hide when the page fully loaded 
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});


const topLink = document.querySelector(".top-link");

        // Show button on scroll
        window.addEventListener("scroll", function () {
            const scrollHeight = window.scrollY;
            if (scrollHeight > 300) {
                topLink.classList.add("show-link");
            } else {
                topLink.classList.remove("show-link");
            }
        });

        // Smooth scroll to top on click
        topLink.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });