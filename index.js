console.clear();
import Card from './js/Cards.js';

const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach(cardElement => {
  Card(cardElement);
});
