let currentIndex = 0;
const images = document.querySelectorAll('.carousel-frame');
const totalImages = images.length;
const slideContainer = document.querySelector('.carousel-slide');
const dotsContainer = document.querySelector('.carousel-dots');

// Create dots dynamically based on the number of image pairs
function createDots() {
    // Number of dots should be half the number of images
    const numberOfDots = Math.ceil(totalImages / 2);
    
    for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
    }
}

// Function to change the active dot
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active', 'pulse')); // Remove active and pulse class

    // Add active and pulse to the dot corresponding to the current index
    const activeDot = dots[Math.floor(currentIndex / 2)];
    activeDot.classList.add('active', 'pulse');
}

// Function to move to the next two images
function nextImage() {
    currentIndex = (currentIndex + 2) % totalImages; // Move 2 images at a time
    updateCarousel();
    updateDots();
}

// Function to update the carousel's slide position
function updateCarousel() {
    const offset = -currentIndex * 220; // Each image has a width of 220px (200px + 20px margin)
    slideContainer.style.transform = `translateX(${offset}px)`;
}

// Set up the automatic sliding (every 3 seconds)
setInterval(nextImage, 3000); // Change image every 3 seconds

// Initialize the dots and set the first dot as active
createDots();
updateDots();

