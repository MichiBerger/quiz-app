export function logout() {
  const logoutButton = document.querySelector('[data-js="logout-button"]');

  logoutButton?.addEventListener('click', event => {
    event.preventDefault();

    if (logoutButton.value.trim() === 'Logout') {
      logoutButton.value = 'Sign In';
    } else {
      logoutButton.value = 'Logout';
    }
  });
}
