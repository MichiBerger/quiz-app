export function logout() {
  const logoutButton = document.querySelector('[data-js="logout-button"]');
  const loginButton = document.querySelector('[data-js="login-button"]');
  const loggedOutSection = document.querySelector(
    '[data-js="logged-out-section"]'
  );
  const loggedInSection = document.querySelector(
    '[data-js="logged-in-section"]'
  );
  const userNameInput = document.querySelector('[data-js="userName"]');
  const userPasswordInput = document.querySelector('[data-js="userPassword"]');

  const loginForm = document.querySelector('[data-js="login-form"]');
  const failedTextMessage = document.querySelector(
    '[data-js="failed-login-text"]'
  );

  console.log(loggedOutSection);
  console.log(loggedInSection);
  console.log(loginButton);
  console.log(userNameInput);
  console.log(userPasswordInput);
  console.log(loginForm);
  console.log(failedTextMessage);

  logoutButton?.addEventListener('click', event => {
    event.preventDefault();
    loggedInSection.classList.add('hide');
    loggedInSection.classList.remove('profile');
    loggedOutSection.classList.remove('hide');
    loggedOutSection.classList.add('profile', 'profile--login');
  });

  loginButton?.addEventListener('click', event => {
    event.preventDefault();
    const userName = 'KarlSchneider';
    const userPassword = 'test';

    if (
      userNameInput.value.trim() === userName &&
      userPasswordInput.value.trim() === userPassword
    ) {
      loggedInSection.classList.remove('hide');
      loggedInSection.classList.add('profile');
      loggedOutSection.classList.add('hide');
      loggedOutSection.classList.remove('profile', 'profile--login');
    } else {
      failedTextMessage.classList.remove('hide');
    }
  });
}
