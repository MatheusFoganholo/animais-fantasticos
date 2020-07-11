// Importing function to verify outside click
import outsideClick from './outside-click.js';

export default function initDropdownMenu() {
  // Selecting Menu
  const dropdownMenu = document.querySelectorAll('[data-dropdown]');

  // Function to toggle 'active-menu' to display submenu
  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active-menu');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active-menu');
    });
  }

  // For earch click / touchstart will do handleclick function
  dropdownMenu.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
