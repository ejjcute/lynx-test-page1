document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'images/bsbild_fullhd_01.jpg',
        'images/bsbild_fullhd_02.jpg',
        'images/bsbild_fullhd_03.jpg'
    ];

    let currentIndex = 0;
    const currentBackground = document.querySelector('.current-background');
    const nextBackground = document.querySelector('.next-background');

    function changeBackground() {
    // Preload the next image
    const nextImage = new Image();
    nextImage.src = images[(currentIndex + 1) % images.length];
    nextImage.onload = () => {
        // Set the next background image
        nextBackground.style.backgroundImage = `url(${images[(currentIndex + 1) % images.length]})`;

        // Start the fade out effect on the current image
        currentBackground.style.opacity = '0'; // Fade out current
        nextBackground.style.opacity = '1'; // Fade in next

        // After fading out, update the current image
        setTimeout(() => {
            // Move the next image to current
            currentBackground.style.backgroundImage = `url(${images[currentIndex]})`;
            currentBackground.style.opacity = '1'; // Fade the current image back in
            nextBackground.style.opacity = '0'; // Hide next background
        }, 1); // Wait for the fade out to finish

        // Update index for the next image
        currentIndex = (currentIndex + 1) % images.length;
    };
}

    // Initial background setting
    currentBackground.style.backgroundImage = `url(${images[currentIndex]})`;
    nextBackground.style.backgroundImage = `url(${images[(currentIndex + 1) % images.length]})`;
    nextBackground.style.opacity = '0'; // Ensure next background starts hidden

    // Change background every 9 seconds (adjust as needed)
    setInterval(changeBackground, 5000);
});