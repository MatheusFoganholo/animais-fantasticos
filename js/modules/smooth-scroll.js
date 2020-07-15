// Smooth Scroll (Internal Link)
export default class SmoothScroll {
  // Selecting Links
  constructor(links, options) {
    this.internalLinks = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    // Changing the 'this' to not lose the reference of "scrollToSection"
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  // Function to scroll
  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  // Event
  addLinkEvent() {
    // Loop
    this.internalLinks.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  // Method to initialize
  init() {
    if (this.internalLinks.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
