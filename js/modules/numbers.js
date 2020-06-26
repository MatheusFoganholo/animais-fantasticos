export default function initNumberAnimation() {
    const numbers = document.querySelectorAll('[data-numero]');

    function animeNumbers() {
        numbers.forEach((number) => {
            const total = +number.innerText;
            const increment = Math.floor(total / 100);
            let start = 0;
            const timer = setInterval(() => {
                start = start + increment;
                number.innerText = start;
                if(start > total) {
                    number.innerText = total;
                    clearInterval(timer)
                }}, 50 * Math.random());
        });
    }

    function handleMutation(mutation) {
       if(mutation[0].target.classList.contains('activate')) {
           observer.disconnect();
           animeNumbers();
       }
    }

    const observerTarget = document.querySelector('.numeros');
    const observer = new MutationObserver(handleMutation);
    observer.observe(observerTarget, {attributes: true})
}