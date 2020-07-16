export default class NumberAnimation {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    // Binding 'this' from object to the callback from mutation
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Receive a DOM element, with a number in the text
  // Increment from 0 to final number
  static incrementNumber(number) {
    const total = +number.innerText;
    const increment = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      number.innerText = start;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 50 * Math.random());
  }

  // Active incrementNumber for each number selected from DOM
  animeNumbers() {
    this.numbers.forEach((number) => this.constructor.incrementNumber(number));
  }

  // Function that run when mutation occurs
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animeNumbers();
    }
  }

  // Add MutationObserver to verify when a class 'active'
  // is added to the target element.
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  // Method to initialize.
  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
