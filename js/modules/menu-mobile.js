import outsideClick from './outside-click.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    // Selecting Menu
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    // Shortcute to facility repeated words.
    this.activeClass = 'active';

    // Touchstart and click are the standard arguments if not defined
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    // Binding 'this' to the callback to make reference to the class object
    this.openMenu = this.openMenu.bind(this);
  }

  // Method to toggle the 'active' class at menuList and menuButton
  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  // Method to add events to each user events
  addMenuMobileEvents() {
    // eslint-disable-next-line max-len
    this.events.forEach((userEvent) => this.menuButton.addEventListener(userEvent, this.openMenu));
  }

  // Method to initialize the function
  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
