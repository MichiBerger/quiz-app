console.clear();
import Card from './js/Cards.js';
import Navigation from './js/Navigation.js';

import { logout } from './js/logout.js';
// import { navigation } from './js/navigation.js';

const allCardElements = document.querySelectorAll('[data-js="card"]');
const allNavElements = document.querySelectorAll('[data-js="navigation"]');

allCardElements.forEach(cardElement => {
  Card(cardElement);
});
allNavElements.forEach(cardElement => {
  Navigation(cardElement);
});

logout();
// navigation();
