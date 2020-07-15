// Importing Modules
import initTabNav from './modules/navigation-by-tabs.js';
import SmoothScroll from './modules/smooth-scroll.js';
import initAccordion from './modules/accordion-list.js';
import initAnimeWhenScroll from './modules/anime-when-scroll.js';
import initModal from './modules/modal.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOpeningHours from './modules/opening-hours.js';
import initFetchAnimals from './modules/fetch-animals.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

// Smooth Scroll
const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

// Initializing Functions
initTabNav();
initAccordion();
initAnimeWhenScroll();
initModal();
initDropdownMenu();
initMenuMobile();
initOpeningHours();
initFetchAnimals();
initFetchBitcoin();
