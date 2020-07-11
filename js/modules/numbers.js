export default function initNumberAnimation() {
  const numbers = document.querySelectorAll('[data-numero]');

  function animeNumbers() {
    numbers.forEach((number) => {
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
    });
  }

  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('activate')) {
      observer.disconnect();
      animeNumbers();
    }
  }

  observer = new MutationObserver(handleMutation);

  const observerTarget = document.querySelector('.numeros');
  observer.observe(observerTarget, { attributes: true });
}
