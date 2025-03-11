// fixing header
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNav");

    if (window.scrollY > 50) {
      // Change color after scrolling 50px
      navbar.style.background = "#ffffff"; // White background when scrolled
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"; // Optional: add shadow for better UI
    } else {
      // Reset to original background based on screen size
      if (window.innerWidth < 992) {
        navbar.style.background = "#d9fff4"; // Mobile background
      } else {
        navbar.style.background = "#ffffff"; // Desktop background
      }
      navbar.style.boxShadow = "none";
    }
  });
});

//*************** mulitple img swiper ***************
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
    },
  },
});

//*************** preloader***************
const preloader = document.querySelector(".preloader"); // hide when the page fully loaded
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

//****************** top link and scrolling -******************

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
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the top gallery (testimonials content)
  const galleryTop = new Swiper('.testimonial-gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.custom-next-button',
      prevEl: '.custom-prev-button',
    },
    loop: false, // Removed infinite loop
    grabCursor: true,
    effect: 'flip',
    flipEffect: {
      slideShadows: true,
    },
  });
  //****************** thumb swiper ******************

  const galleryThumbs = new Swiper('.testimonial-gallery-thumbs', {
    spaceBetween: 5,
    centeredSlides: true, // Center the active thumbnail
    slidesPerView: 3, // Show 3 thumbnails at a time
    slideToClickedSlide: true,
    loop: false, // Removed infinite loop
    on: {
      slideChange: function () {
        // Highlight active thumbnail
        document.querySelectorAll('.testimonial-gallery-thumbs .swiper-slide').forEach(slide => {
          slide.style.opacity = 0.7; // Default opacity for all slides
        });
        const activeSlide = this.slides[this.activeIndex];
        activeSlide.style.opacity = 1; // Active slide full opacity
      },
      reachBeginning: function () {
        // Disable previous button when reaching the first slide
        document.querySelector('.custom-prev-button').style.opacity = 0.3;
        document.querySelector('.custom-prev-button').style.pointerEvents = 'none';
      },
      reachEnd: function () {
        // Disable next button when reaching the last slide
        document.querySelector('.custom-next-button').style.opacity = 0.3;
        document.querySelector('.custom-next-button').style.pointerEvents = 'none';
      },
      fromEdge: function () {
        // Enable navigation buttons when not at the edge
        document.querySelector('.custom-prev-button').style.opacity = 1;
        document.querySelector('.custom-prev-button').style.pointerEvents = 'auto';
        document.querySelector('.custom-next-button').style.opacity = 1;
        document.querySelector('.custom-next-button').style.pointerEvents = 'auto';
      },
    }
  });

  // Link the two Swipers (testimonials and thumbnails)
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;
});




// *************** blog swiper *****************
var blogSwiper = new Swiper(".blog-swiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".blog-button-next",
    prevEl: ".blog-button-prev",
  },
  on: {
    init: function (swiper) {
      document.querySelector(".blog-button-prev").style.display = swiper.isBeginning ? "none" : "block";
    },
    slideChange: function (swiper) {
      document.querySelector(".blog-button-prev").style.display = swiper.isBeginning ? "none" : "block";
    }
  }
});



