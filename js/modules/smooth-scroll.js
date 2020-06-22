// Smooth Scroll (Internal Link)
export default function initSmoothScroll() {
    // Selecting Links
    const internalLinks = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]');

    // Function to scroll
    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topDist = section.offsetTop;

        // Transition
        window.scrollTo({
            top: topDist,
            behavior: 'smooth',
        });
    }

    // Loop
    internalLinks.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
}