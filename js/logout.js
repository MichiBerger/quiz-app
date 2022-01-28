export function logout() {
  const logoutButton = document.querySelector('[data-js="logout-button"]');

  logoutButton?.addEventListener('click', event => {
    event.preventDefault();

    //const textLogoutButton =
    logoutButton.value.trim() === 'Logout'
      ? (logoutButton.value = 'Sign In')
      : (logoutButton.value = 'Logout');
  });
}
