(() => {
  const body = document.querySelector(`body`);
  const main = document.querySelector(`.main`);
  const footer = document.querySelector(`.footer`);
  const nav = document.querySelector(`.nav`);
  const navLogo = nav.querySelector(`.nav__logo`);
  const navList = nav.querySelector(`.nav__social-list`);
  const navButton = nav.querySelector(`.nav__button`);
  const menu = nav.querySelector(`.menu`);
  const menuButton = menu.querySelector(`.menu__button`);
  const menuLinks = menu.querySelectorAll(`.menu__link`);
  const menuSublist = menu.querySelectorAll(`.menu__sublist`);

  function onPopupEscPress(e) {
    if (e.key === `Escape`) {
      e.preventDefault();
      closePopup();
    }
  }

  function openPopup() {
    body.classList.add(`inert-background`);
    navButton.setAttribute(`aria-expanded`, `true`);
    menu.classList.remove(`menu--closed`);
    menu.classList.add(`menu--opened`);
    main.inert = true;
    navLogo.inert = true;
    navButton.inert = true;
    navList.inert = true;
    footer.inert = true;
    document.addEventListener(`keydown`, onPopupEscPress);
  }

  function closePopup() {
    body.classList.remove(`inert-background`);
    navButton.setAttribute(`aria-expanded`, `false`);
    menu.classList.remove(`menu--opened`);
    menu.classList.add(`menu--closed`);
    main.inert = false;
    navLogo.inert = false;
    navButton.inert = false;
    navList.inert = false;
    footer.inert = false;
    document.removeEventListener(`keydown`, onPopupEscPress);
  }

  navButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    openPopup();
  });

  menuButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    closePopup();
  });

  // Навигационное меню
  for (let i = 0; i < menuLinks.length; i++) {
    menuSublist[i].inert = true;
    menuSublist[i].classList.add(`visually-hidden`);

    let toggleMenu = (e) => {
      if (e.target === menuLinks[i]) {
        menuLinks[i].style.opacity = `1`;
        menuSublist[i].classList.toggle(`visually-hidden`);

        if (!menuSublist[i].classList.contains(`visually-hidden`)) {
          menuSublist[i].inert = false;
        } else {
          menuSublist[i].inert = true;
        }
      } else {
        if (!menuSublist[i].classList.contains(`visually-hidden`)) {
          menuLinks[i].style.opacity = `1`;
        } else {
          menuLinks[i].style.opacity = `0.4`;
        }
      }
    };

    let focusMenu = (e) => {
      if (e.target === menuLinks[i]) {
        menuLinks[i].style.opacity = `1`;
      } else {
        if (!menuSublist[i].classList.contains(`visually-hidden`)) {
          menuLinks[i].style.opacity = `1`;
        } else {
          menuLinks[i].style.opacity = `0.4`;
        }
      }
    };

    document.addEventListener(`click`, (e) => {
      toggleMenu(e);
    });

    document.addEventListener(`keydown`, (e) => {
      if (e.key === `Enter`) {
        toggleMenu(e);
      }
    });

    document.addEventListener(`focus`, (e) => {
      focusMenu(e);
    }, true);
  }
})();
