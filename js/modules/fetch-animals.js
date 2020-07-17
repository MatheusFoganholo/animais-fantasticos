// Importing Number Animation
import NumberAnimation from './numbers.js';
// Function
export default function fetchAnimals(url, target) {
  // Updating the created div for each animal
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.species}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Fill each animal at DOM
  const numbersGrid = document.querySelector(target);
  function fillAnimals(animal) {
    const animalDiv = createAnimal(animal);
    numbersGrid.appendChild(animalDiv);
  }

  // Numbers Animation
  function animatingNumbers() {
    const numberAnimation = new NumberAnimation('[data-numero]', '.numeros', 'activate');
    numberAnimation.init();
  }

  // Picking data from json file and creating a div
  async function createAnimals() {
    try {
      // Fetch and wait response
      const animalsResponse = await fetch(url);
      // Transform response in json
      const animalsJSON = await animalsResponse.json();
      // After transformation, the functions to fill
      // and anime the numbers are activated
      animalsJSON.forEach((animal) => fillAnimals(animal));
      animatingNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }
  return createAnimals();
}
