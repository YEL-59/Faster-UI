// Toggle mobile menu visibility
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


// carousel functionality
document.addEventListener("DOMContentLoaded", function () {
  const carouselItems = document.querySelector('.carousel-items');
  const totalSlides = document.querySelectorAll('.carousel-item').length;
  const slideWidth = 100 /2; // Each slide takes 1/3 of the container width
  let currentIndex = 1; // Start with the second slide as the center

  // Function to update the carousel position
  function updateCarousel() {
    const translateX = -(currentIndex * slideWidth - slideWidth / 2);
    carouselItems.style.transform = `translateX(${translateX}%)`;
  }

  // Next button click event
  document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop to first slide after the last
    updateCarousel();
  });

  // Previous button click event
  document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop to last slide if first
    updateCarousel();
  });

  // Initial setup
  updateCarousel();
});




// drop down section for frequently asked question
function toggleFaq(faqId) {
  const content = document.getElementById(`faq-${faqId}`);
  const icon = document.getElementById(`icon-${faqId}`);

  // Check if it's currently hidden
  if (content.style.maxHeight) {
    // Close the answer
    content.style.maxHeight = null;
    icon.classList.remove('rotate-180');
  } else {
    // Open the answer (set the maxHeight to the scrollHeight for a smooth transition)
    content.style.maxHeight = content.scrollHeight + "px";
    icon.classList.add('rotate-180');
  }
}