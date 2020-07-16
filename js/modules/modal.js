export default class Modal {
  constructor(openModalButton, closeModalButton, modalContainer) {
    this.openModalButton = document.querySelector(openModalButton);
    this.closeModalButton = document.querySelector(closeModalButton);
    this.modalContainer = document.querySelector(modalContainer);

    // Binding 'this' to the callback to make reference to the class object
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outsideModalClick = this.outsideModalClick.bind(this);
  }

  // Function to open and close the modal
  toggleModal() {
    this.modalContainer.classList.toggle('modal-active');
  }

  // Adding the toggle event to the modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Function to identify click outside the modal
  outsideModalClick(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal(event);
    }
  }

  // Adding events to the modal elements
  addModalEvents() {
    this.openModalButton.addEventListener('click', this.eventToggleModal);
    this.closeModalButton.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.outsideModalClick);
  }

  init() {
    // If Modal Exists
    if (this.openModalButton && this.closeModalButton && this.modalContainer) {
      this.addModalEvents();
    }
    return this;
  }
}
