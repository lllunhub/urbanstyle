(() => {
  const mainNavOpen = document.querySelector(`.header__main-nav-open`);
  const mainNav = document.querySelector(`.main-nav`);
  const mainNavOpenSpan = mainNavOpen.children[2];

  mainNav.classList.add(`visually-hidden`);
  mainNav.inert = true;

  function onNavMenuEscPress(e) {
    if (e.key === `Escape`) {
      e.preventDefault();
      closeNavMenu();
    }
  }

  function openNavMenu() {
    mainNavOpenSpan.style.width = `30px`;
    mainNav.classList.remove(`visually-hidden`);
    mainNav.inert = false;
    document.addEventListener(`keydown`, onNavMenuEscPress);
  }

  function closeNavMenu() {
    mainNavOpenSpan.style.width = `20px`;
    mainNav.classList.add(`visually-hidden`);
    mainNav.inert = true;
    document.removeEventListener(`keydown`, onNavMenuEscPress);
  }

  mainNavOpen.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (mainNav.classList.contains(`visually-hidden`)) {
      openNavMenu();
    } else {
      closeNavMenu();
    }
  });

  const navButtonOpen = document.querySelector(`.nav__button-open`);
  const navList = document.querySelector(`.nav__list`);

  // navList.classList.add(`visually-hidden`);
  // navList.inert = true;

  function onNavEscPress(e) {
    if (e.key === `Escape`) {
      e.preventDefault();
      closeNav();
    }
  }

  function openNav() {
    navList.classList.remove(`visually-hidden`);
    navList.inert = false;
    document.addEventListener(`keydown`, onNavEscPress);
  }

  function closeNav() {
    navList.classList.add(`visually-hidden`);
    navList.inert = true;
    document.removeEventListener(`keydown`, onNavEscPress);
  }

  navButtonOpen.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (navList.classList.contains(`visually-hidden`)) {
      openNav();
    } else {
      closeNav();
    }
  });
})();
