console.clear();
import Card from './js/Cards.js';

import { logout } from './js/logout.js';
import { navigation } from './js/navigation.js';

const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach(cardElement => {
  Card(cardElement);
});

logout();
navigation();
