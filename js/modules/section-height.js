export default function SectionHeight() {
  let animalsText = document.querySelector('[data-tab="content"] section.active-tab');
  const animalsPhotosArea = document.querySelector('.animais-lista');
  let sectionHeight = animalsText.getBoundingClientRect().height;
  console.log(sectionHeight);
  animalsPhotosArea.style.height = `${sectionHeight}px`;
  animalsPhotosArea.addEventListener('click', () => {
    animalsText = document.querySelector('[data-tab="content"] section.active-tab');
    sectionHeight = animalsText.getBoundingClientRect().height;
    animalsPhotosArea.style.height = `${sectionHeight}px`;
  });
}
