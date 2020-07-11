// Navigation By Tabs
export default function initTabNav() {
  // Selecting List
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  // Adding class 'active-tab' to the animal selected
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('active-tab');
    });
    tabContent[index].classList.add('active-tab');
  }

  // If TabMenu and Tab Content Exists
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('active-tab');

    // Loop
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
