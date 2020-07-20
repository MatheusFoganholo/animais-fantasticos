export default class OpeningHours {
  constructor(openingHours, activeClass) {
    this.openingHours = document.querySelector(openingHours);
    this.activeClass = activeClass;
  }

  dataWeek() {
    this.weekDays = this.openingHours.dataset.semana.split(',').map(Number);
    this.weekHour = this.openingHours.dataset.horario.split(',').map(Number);
  }

  dataNow() {
    this.now = new Date();
    this.dayNow = this.now.getDay();
    this.hourNow = this.now.getUTCHours() - 3;
  }

  isOpen() {
    const dayOpen = this.weekDays.indexOf(this.dayNow) !== -1;
    const hourOpen = (this.hourNow >= this.weekHour[0] && this.hourNow < this.weekHour[1]);
    return dayOpen && hourOpen;
  }

  activeOpen() {
    if (this.isOpen()) {
      this.openingHours.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.openingHours) {
      this.dataWeek();
      this.dataNow();
      this.activeOpen();
    }
    return this;
  }
}
