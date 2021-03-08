// Importing Modules
import TabNav from "./modules/navigation-by-tabs.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import Accordion from "./modules/accordion-list.js";
import AnimeWhenScroll from "./modules/anime-when-scroll.js";
import Modal from "./modules/modal.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import OpeningHours from "./modules/opening-hours.js";
import fetchAnimals from "./modules/fetch-animals.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import SlideNav from "./modules/slide.js";
import SectionHeight from "./modules/section-height.js";
import redirect from "./modules/redirect.js";

// Navigation By Tabs
const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

// Smooth Scroll
const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

// Accordion List
const accordionList = new Accordion('[data-anime="accordion"] dt');
accordionList.init();

// Modal
const modal = new Modal(
  '[data-modal="open-modal"]',
  '[data-modal="close-modal"]',
  '[data-modal="container"]'
);
modal.init();

// Anime When Scroll
const animeWhenScroll = new AnimeWhenScroll('[data-anime="scroll"]');
animeWhenScroll.init();

// Dropdown Menu
const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

// Menu Mobile
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

// Opening Hours
const openingHours = new OpeningHours("[data-semana]", "open");
openingHours.init();

// Fetch Animals
fetchAnimals("./js/animals-api.json", ".numeros-grid");

// Fetch Bitcoin
fetchBitcoin("https://blockchain.info/ticker", ".bitcoin");

// Slide
const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-controls");

// Section Height (Animals Description)
SectionHeight();

// Redirect Link on Menu
redirect();
