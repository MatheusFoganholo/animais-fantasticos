export default function initModal() {
    // Selecting Items
    const openModalButton = document.querySelector('[data-modal="open-modal"]');
    const closeModalButton = document.querySelector('[data-modal="close-modal"]');
    const modalContainer = document.querySelector('[data-modal="container"]');

    // If Modal Exists
    if (openModalButton && closeModalButton && modalContainer) {

        // Function to open and close the modal
        function toggleModal(event) {
            event.preventDefault();
            modalContainer.classList.toggle('modal-active');
        }

        // Function to identify click outside the modal
        function outsideModalClick(event) {
            if (event.target === this) {
                toggleModal(event);
            }
        }

        // Events
        openModalButton.addEventListener('click', toggleModal);
        closeModalButton.addEventListener('click', toggleModal);
        modalContainer.addEventListener('click', outsideModalClick);
    }
}