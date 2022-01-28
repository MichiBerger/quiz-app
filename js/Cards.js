export default function Card(cardElement) {
  const buttonBookmark = cardElement.querySelector('[data-js="bookmark"]');
  const colorBookmark = cardElement.querySelector('[data-js="colorBookmark"]');

  const answerButton = cardElement.querySelector('[data-js="answerButton"]');
  const answerText = cardElement.querySelector('[data-js="answerText"]');

  buttonBookmark.addEventListener('click', () => {
    colorBookmark.classList.toggle('card__icon--red');
  });

  answerButton.addEventListener('click', () => {
    if (answerButton.textContent.trim() === 'Show Answer') {
      answerButton.textContent = 'Hide Answer';
      answerText.classList.remove('hide');
    } else {
      answerButton.textContent = 'Show Answer';
      answerText.classList.add('hide');
    }
  });
}
