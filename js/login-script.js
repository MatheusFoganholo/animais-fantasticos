// Importing Modules
import SmoothScroll from './modules/smooth-scroll.js';
import AnimeWhenScroll from './modules/anime-when-scroll.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import redirect from './modules/redirect.js';

// Smooth Scroll
const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

// Anime When Scroll
const animeWhenScroll = new AnimeWhenScroll('[data-anime="scroll"]');
animeWhenScroll.init();

// Dropdown Menu
const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

// Menu Mobile
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

// Redirect Link on Menu
redirect();
