export function textarea() {
  const textAreaAnswer = document.querySelector('[data-js="textarea-answer"]');
  const textAreaQuestion = document.querySelector(
    '[data-js="textarea-question"]'
  );
  const counterOutputAnswer = document.querySelector(
    '[data-js="counter-output-answer"]'
  );
  const counterOutputQuestion = document.querySelector(
    '[data-js="counter-output-question"]'
  );
  const maxCharacters = 200;

  textAreaAnswer?.addEventListener('input', () => {
    counterOutputAnswer.textContent = textAreaAnswer.value.length;

    if (counterOutputAnswer.textContent >= 185) {
      counterOutputAnswer.style.color = 'red';
    } else {
      counterOutputAnswer.style.color = 'black';
    }
  });

  textAreaQuestion?.addEventListener('input', () => {
    const remainingCharacter = maxCharacters - textAreaQuestion.value.length;
    counterOutputQuestion.textContent = `${remainingCharacter} characters remaining`;
    if (remainingCharacter <= 15) {
      counterOutputQuestion.style.color = 'red';
    } else {
      counterOutputQuestion.style.color = 'black';
    }
    console.log(remainingCharacter);
  });
}
