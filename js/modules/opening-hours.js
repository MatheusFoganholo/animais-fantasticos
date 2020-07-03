export default function initOpeningHours() {
    const openingHours = document.querySelector('[data-semana]');
    const weekDays = openingHours.dataset.semana.split(',').map(Number);
    const weekHour = openingHours.dataset.horario.split(',').map(Number);
    const now = new Date();
    const dayNow = now.getDay();
    const hourNow = now.getHours();
    const dayOpen = weekDays.indexOf(dayNow) !== -1;
    const hourOpen = (hourNow >= weekHour[0] && hourNow < weekHour[1]);

    if(dayOpen && hourOpen) {
        openingHours.classList.add('open');
    }

}