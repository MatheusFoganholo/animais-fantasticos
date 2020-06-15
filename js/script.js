// Navigation By Tabs
// Selecting List
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