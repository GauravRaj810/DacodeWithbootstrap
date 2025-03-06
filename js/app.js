
// Initialize Swiper
const swiper = new Swiper('.swiper', {
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 1, // Show only the main slide
    }
  },
  on: {
    init: function () {
      adjustSliderForScreenSize();
    },
    resize: function () {
      adjustSliderForScreenSize();
    }
  }
});

// Function to handle responsive behavior
function adjustSliderForScreenSize() {
  const isMobile = window.innerWidth < 768;
  const slides = document.querySelectorAll('.swiper-slide');
  
  if (isMobile) {
    // For mobile: Extract each image wrapper as its own slide
    reorganizeForMobile();
  } else {
    // For desktop: Return to original structure if needed
    reorganizeForDesktop();
  }
}

// Restructure slider for mobile view
function reorganizeForMobile() {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  const originalSlides = document.querySelectorAll('.swiper-slide');
  const allImageWrappers = [];
  
  // Store the original structure if not already stored
  if (!window.originalSwiperStructure) {
    window.originalSwiperStructure = swiperWrapper.innerHTML;
  }
  
  // First, collect all image wrappers from all slides
  originalSlides.forEach(slide => {
    const imageWrappers = slide.querySelectorAll('.img-wrapper');
    imageWrappers.forEach(wrapper => {
      allImageWrappers.push(wrapper.cloneNode(true));
    });
  });
  
  // Then clear and rebuild the swiper
  swiperWrapper.innerHTML = '';
  // Create new slide for each image wrapper
  allImageWrappers.forEach(wrapper => {
    const newSlide = document.createElement('div');
    newSlide.className = 'swiper-slide';
    
    const newSlideContent = document.createElement('div');
    newSlideContent.className = 'slide-content mobile-view';
    
    newSlideContent.appendChild(wrapper);
    newSlide.appendChild(newSlideContent);
    swiperWrapper.appendChild(newSlide);
  });
  
  // Refresh swiper after DOM manipulation
  swiper.update();
}

// Restore desktop structure
function reorganizeForDesktop() {
  // Only restructure if we've previously changed to mobile view
  if (window.originalSwiperStructure) {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = window.originalSwiperStructure;
    swiper.update();
  }
}

// Handle tab click to move Swiper slide
document.querySelectorAll('.nav-link').forEach((tab, index) => {
  tab.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    const slideIndex = parseInt(this.getAttribute('data-slide'));
    swiper.slideTo(slideIndex); // Move to the selected slide

    // Update active tab manually (Bootstrap won't auto-handle this)
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});




