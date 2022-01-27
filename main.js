console.clear();

// index site
const buttonBookmark = document.querySelector('[data-js="bookmark"]');
const colorBookmark = document.querySelector('[data-js="colorBookmark"]');
const answerButton = document.querySelector('[data-js="answerButton"]');
const showButton = document.querySelector('[data-js="showButton"]');
const hideButton = document.querySelector('[data-js="hideButton"]');
const answerText = document.querySelector('[data-js="answerText"]');
// profile site
const logoutButton = document.querySelector('[data-js="logout-button"]');
const logoutButtonTest = document.querySelector('[data-js="button-logout"]');

// // changes color of the card bookmark
buttonBookmark.addEventListener('click', () => {
  colorBookmark.classList.toggle('card__icon--red');
});

// // changes text of show answer button and shows answer text
answerButton.addEventListener('click', () => {
  showButton.classList.toggle('hide');
  hideButton.classList.toggle('hide');
  answerButton.classList.toggle('card__answer--toggle');
  answerText.classList.toggle('hide');
});

logoutButtonTest.addEventListener('submit', event => {
  event.preventDefault();
  let logoutTextTest = logoutButtonTest.value;
  console.log(logoutButtonTest);
  logoutButtonTest.value = 'Test';
});

logoutButton.addEventListener('submit', event => {
  event.preventDefault();
  alert('test');
  let logoutText = logoutButton.value;
  console.log(logoutText);
  logoutText.value = 'Hallo';
});
