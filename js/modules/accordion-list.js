// Accordion List
export default function initAccordion() {

    // Selecting List
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'active';

    // If Accordion Exists
    if(accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        // Adding and removing 'active' class
        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        // Loop
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}