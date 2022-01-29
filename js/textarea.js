console.clear();
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

  textAreaAnswer.addEventListener('input', () => {
    counterOutputAnswer.textContent = textAreaAnswer.value.length;
  });

  textAreaQuestion.addEventListener('input', () => {
    console.log(textAreaQuestion.value.length);
    counterOutputQuestion.textContent =
      Number(counterOutputQuestion.textContent) -
      Number(textAreaQuestion.value.length);
  });
}
