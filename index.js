// Get the review pages and buttons
const reviewPages = document.querySelectorAll('.review-page');
const prevButton = document.querySelector('.slider-button_prev');
const nextButton = document.querySelector('.slider-button_next');

// Initialize the current index
let currentIndex = 0;

// Function to update button opacity
function updateButtonOpacity() {
  if (currentIndex === 0) {
    prevButton.disabled = true;
    nextButton.disabled = false;

    
  } else if (currentIndex === reviewPages.length - 1) {
    prevButton.disabled = false;
    nextButton.disabled = true;

  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}

// Add event listeners to the buttons
prevButton.addEventListener('click', () => {
  // Check if we have a previous item
  if (currentIndex > 0) {
    // Remove the active class from the current page
    reviewPages[currentIndex].classList.remove('active');

    // Decrement the current index
    currentIndex -= 1;

    // Add the active class to the previous page
    reviewPages[currentIndex].classList.add('active');

    // Update the button opacity
    updateButtonOpacity();
  }
});

nextButton.addEventListener('click', () => {
  // Check if we have a next item
  if (currentIndex < reviewPages.length - 1) {
    // Remove the active class from the current page
    reviewPages[currentIndex].classList.remove('active');

    // Increment the current index
    currentIndex += 1;

    // Add the active class to the next page
    reviewPages[currentIndex].classList.add('active');

    // Update the button opacity
    updateButtonOpacity();
  }
});

// Initialize the button opacity
updateButtonOpacity();

reviewPages[0].classList.add('active');