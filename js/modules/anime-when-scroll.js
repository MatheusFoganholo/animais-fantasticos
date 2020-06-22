export default function initAnimeWhenScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');

    // If Sections Exists
    if (sections.length) {
        const halfWindow = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - halfWindow) < 0;
                if(isSectionVisible) {
                    section.classList.add('activate')
                }
            })
        }

        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}