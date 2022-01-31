console.clear();
import Card from './js/Cards.js';
import Navigation from './js/navigation.js';

import { logout } from './js/logout.js';
import { textarea } from './js/textarea.js';

const allCardElements = document.querySelectorAll('[data-js="card"]');
const allNavElements = document.querySelectorAll('[data-js="navigation"]');

allCardElements.forEach(cardElement => {
  Card(cardElement);
});
allNavElements.forEach(() => {
  Navigation();
  // Navigation(navElement);
});

textarea();
logout();
