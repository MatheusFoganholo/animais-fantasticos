// Navigation By Tabs
// Selecting List
function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('active-tab')

        // Adding class 'ativo' to the animal selected
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('active-tab');
            });
            tabContent[index].classList.add('active-tab')
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        });
    }
}

// Init TabNav Function
initTabNav();

// Accordion List
function initAccordion() {

    // Selecting List
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'active';

    if(accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        // Adding and removing 'active' class
        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}

// Init Accordion Function
initAccordion();