// Importing Modules
import TabNav from './modules/navigation-by-tabs.js';
import SmoothScroll from './modules/smooth-scroll.js';
import Accordion from './modules/accordion-list.js';
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

// Accordion List
const accordionList = new Accordion('[data-anime="accordion"] dt');
accordionList.init();

// Navigation By Tabs
const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

// Initializing Functions
initAnimeWhenScroll();
initModal();
initDropdownMenu();
initMenuMobile();
initOpeningHours();
initFetchAnimals();
initFetchBitcoin();
