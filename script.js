// Generate falling music logos
function createMusicLogo() {
    const logo = document.createElement('div');
    logo.classList.add('music-logo');
    logo.style.left = Math.random() * 100 + 'vw';
    logo.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random speed
    logo.style.opacity = Math.random() * 0.7 + 0.3; // Random opacity
    document.body.appendChild(logo);

    // Remove the logo after animation
    logo.addEventListener('animationend', () => {
        logo.remove();
    });
}

// Create multiple logos every 300ms
setInterval(createMusicLogo, 300);
