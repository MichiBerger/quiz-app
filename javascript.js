const ButtonBookmark = document.querySelector('[data-js="bookmark"]');
const ColorBookmark = document.querySelector('[data-js="colorBookmark"]');


ButtonBookmark.addEventListener('click', () => {
  ColorBookmark.classList.toggle('card__icon--red')
});




