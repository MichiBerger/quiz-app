export default function Navigation(cardElement) {
  const homeNavButton = cardElement.querySelector('[data-js="nav-home"]');
  const bookmarkNavButton = cardElement.querySelector(
    '[data-js="nav-bookmark"]'
  );
  const createNavButton = cardElement.querySelector('[data-js="nav-create"]');
  const profileNavButton = cardElement.querySelector('[data-js="nav-profile"]');

  homeNavButton.addEventListener('click', () => {
    homeNavButton.classList.add('nav__link--active');
    bookmarkNavButton.classList.remove('nav__link--active');
    createNavButton.classList.remove('nav__link--active');
    profileNavButton.classList.remove('nav__link--active');
  });

  bookmarkNavButton.addEventListener('click', () => {
    homeNavButton.classList.remove('nav__link--active');
    bookmarkNavButton.classList.add('nav__link--active');
    createNavButton.classList.remove('nav__link--active');
    profileNavButton.classList.remove('nav__link--active');
  });

  createNavButton.addEventListener('click', () => {
    homeNavButton.classList.remove('nav__link--active');
    bookmarkNavButton.classList.remove('nav__link--active');
    createNavButton.classList.add('nav__link--active');
    profileNavButton.classList.remove('nav__link--active');
  });

  profileNavButton.addEventListener('click', () => {
    homeNavButton.classList.remove('nav__link--active');
    bookmarkNavButton.classList.remove('nav__link--active');
    createNavButton.classList.remove('nav__link--active');
    profileNavButton.classList.add('nav__link--active');
  });
}
