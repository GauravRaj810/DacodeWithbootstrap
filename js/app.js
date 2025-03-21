document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("mainNav");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // Close navbar when clicking on a nav link (for mobile view)
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992) {
        navbarToggler.click(); // Programmatically toggle the navbar
      }
    });
  });

  // Change header background on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.background = "#ffffff";
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.background = window.innerWidth < 992 ? "#ffffff" : "#ffffff";
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
  grabCursor: true,
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



// testimonal swiper content --- 
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
  slidesPerView: 3, // Default to 3 slides per view
  centeredSlides: true,
  spaceBetween: 30, // Default space between slides
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  navigation: {
    nextEl: ".blog-button-next",
    prevEl: ".blog-button-prev",
  },
  breakpoints: {
    // When the screen width is <= 992px
    1400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // When the screen width is <= 992px
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // When the screen width is <= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // When the screen width is <= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // When the screen width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
  on: {
    init: function () {
      updateNavigationVisibility();
    },
    resize: function () {
      updateNavigationVisibility();
    },
    slideChange: function (swiper) {
      // Show/hide prev button based on if we're at the beginning
      if (window.innerWidth > 992) {
        document.querySelector(".blog-button-prev").style.display = swiper.isBeginning ? "none" : "block";
        document.querySelector(".blog-button-next").style.display = swiper.isEnd ? "none" : "block";
      }
    }
  }
});

// Function to update navigation buttons visibility based on screen width
function updateNavigationVisibility() {
  const prevBtn = document.querySelector(".blog-button-prev");
  const nextBtn = document.querySelector(".blog-button-next");
  
  if (window.innerWidth <= 992) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = blogSwiper.isBeginning ? "none" : "block";
    nextBtn.style.display = blogSwiper.isEnd ? "none" : "block";
  }
}

// Add event listener for window resize
window.addEventListener('resize', updateNavigationVisibility);

// Make sure navigation is correctly set on page load
document.addEventListener("DOMContentLoaded", function () {
  // Update navigation visibility after a slight delay to ensure Swiper is fully initialized
  setTimeout(updateNavigationVisibility, 100);
  
  // Fix for testimonial gallery height if it exists
  let swiperTop = document.querySelector(".testimonial-gallery-top");
  if (swiperTop) {
    swiperTop.style.height = "auto";
  }
});


// tooltip functionlity ********
document.addEventListener('DOMContentLoaded', function() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
})

// search bar -********** 

 // Get elements
 const searchIcon = document.getElementById('searchIcon');
 const searchBar = document.getElementById('searchBar');
 const closeSearchBtn = document.getElementById('closeSearchBtn');

 // Show the search bar when the search icon is clicked
 searchIcon.addEventListener('click', () => {
   searchBar.classList.add('active'); // Slide the search bar down
 });

 // Close the search bar when the close button is clicked
 closeSearchBtn.addEventListener('click', () => {
   searchBar.classList.remove('active'); // Slide the search bar up
 });









