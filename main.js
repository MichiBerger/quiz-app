console.clear();

const buttonBookmark = document.querySelector('[data-js="bookmark"]');
const colorBookmark = document.querySelector('[data-js="colorBookmark"]');
const answerButton = document.querySelector('[data-js="answerButton"]');
const showButton = document.querySelector('[data-js="showButton"]');
const hideButton = document.querySelector('[data-js="hideButton"]');
const answerText = document.querySelector('[data-js="answerText"]');

console.log(buttonBookmark);
console.log(colorBookmark);
console.log(answerButton);
console.log(showButton);
console.log(hideButton);
console.log(answerText);

// changes color of the card bookmark
buttonBookmark.addEventListener("click", () => {
  colorBookmark.classList.toggle("card__icon--red");
});

// changes text of show answer button and shows answer text
answerButton.addEventListener("click", () => {
  showButton.classList.toggle("hide");
  hideButton.classList.toggle("hide");
  answerButton.classList.toggle("card__answer--toggle");
  answerText.classList.toggle("hide");
});
