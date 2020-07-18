import debounce from './debounce.js';

export default class AnimeWhenScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // Gets the distance of each item in relation to the top of the site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.halfWindow),
      };
    });
  }

  // Checks the distance on each object in relation to the site scroll
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('activate');
      } else if (item.element.classList.contains('activate')) {
        item.element.classList.remove('activate');
      }
    });
  }

  // Method to initialize the function
  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Remove scroll event
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
