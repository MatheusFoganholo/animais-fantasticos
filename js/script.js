// Navigation By Tabs
function initTabNav() {
    // Selecting List
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    // If TabMenu and Tab Content Exists
    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('active-tab')

        // Adding class 'active-tab' to the animal selected
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('active-tab');
            });
            tabContent[index].classList.add('active-tab')
        }

        // Loop
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        });
    }
}

// Accordion List
function initAccordion() {

    // Selecting List
    const accordionList = document.querySelectorAll('.js-accordion dt');
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

// Smooth Scroll (Internal Link)
function initSmoothScroll() {
    // Selecting Links
    const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

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

function initAnimeWhenScroll() {
    const sections = document.querySelectorAll('.js-scroll');

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

// Initializing Functions
initAccordion();
initTabNav();
initSmoothScroll();
initAnimeWhenScroll();