// Importing function to verify outside click
import outsideClick from './outside-click.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    // Selecting Menu
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // Touchstart and click are the standard arguments if not defined
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    // Shortcute to facility repeated words.
    this.activeClass = 'active-menu';

    // Binding 'this' to the callback to make reference to the class object
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Function to toggle 'active-menu' to display submenu
  // And add observer to verifying the click outside of the menu
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Add events to the dropdown menu
  addDropdownMenusEvent() {
    // For earch click / touchstart will fire activeDropdownMenu function
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  // Method to initialize the function
  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
