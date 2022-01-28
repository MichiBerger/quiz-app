export function logout() {
  const logoutButton = document.querySelector('[data-js="logout-button"]');

  logoutButton?.addEventListener('click', event => {
    event.preventDefault();

    logoutButton.value.trim() === 'Logout'
      ? (logoutButton.value = 'Sign In')
      : (logoutButton.value = 'Logout');
  });
}
