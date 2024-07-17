// Get carousel images and dots
var images = document.querySelectorAll('.carousel-images img');
var dots = document.querySelectorAll('.carousel-dots .dot');

// Set initial index
var index = 0;

// Function to update carousel
function updateCarousel() {
    // Hide all images and remove 'active' class from all dots
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
        dots[i].classList.remove('active');
    }

    // Show current image and add 'active' class to current dot
    images[index].style.display = 'block';
    dots[index].classList.add('active');
}

// Function to change image when dot is clicked
function dotClick(e) {
    // Get index of clicked dot
    index = Array.prototype.indexOf.call(dots, e.target);

    // Update carousel
    updateCarousel();
}

// Add click event listener to each dot
for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', dotClick);
}

// Update carousel for the first time
updateCarousel();