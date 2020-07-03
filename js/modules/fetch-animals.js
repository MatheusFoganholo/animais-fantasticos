// Importing Number Animation
import initNumberAnimation from './numbers.js';

// Function
export default function initFetchAnimals() {

    // Picking data from json file and creating a div
    async function fetchAnimals(url) {
        const animalsResponse = await fetch(url);
        const animalsJSON = await animalsResponse.json();
        const numbersGrid = document.querySelector('.numeros-grid');
        animalsJSON.forEach(animal => {
            const animalDiv = createAnimal(animal);
            numbersGrid.appendChild(animalDiv);
        });
        initNumberAnimation();
    }
    
    // Updating the created div for each animal
    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.species}</h3><span data-numero>${animal.total}</span>`;
        return div;
    };
    
    fetchAnimals('./animals-api.json');
}