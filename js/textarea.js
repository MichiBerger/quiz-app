export function textarea() {
  const textarea = document.querySelector('[data-js="textarea"]');
  console.log(textarea);

  textarea?.addEventListener('input', () => {
    console.log(textarea.value.length);
  });
}
