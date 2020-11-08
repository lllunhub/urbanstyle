(() => {
  const body = document.querySelector(`.page__body`);
  const header = document.querySelector(`.header`);
  const main = document.querySelector(`.main`);
  const footer = document.querySelector(`.footer`);
  const popup = document.querySelector(`.popup`);
  const popupClose = document.querySelector(`.popup__close`);
  const popupBefore = document.querySelector(`.popup__before`);
  const popupAfter = document.querySelector(`.popup__after`);
  const popupButton = document.querySelector(`.popup__button`);

  popup.inert = true;

  function onPopupEscPress(e) {
    if (e.key === `Escape`) {
      e.preventDefault();
      closePopup();
    }
  }

  function openPopup() {
    body.classList.add(`page__body--inert`);
    popup.classList.remove(`visually-hidden`);
    popup.inert = false;
    header.inert = true;
    main.inert = true;
    footer.inert = true;
    popupAfter.inert = true;
    document.addEventListener(`keydown`, onPopupEscPress);
  }

  function closePopup() {
    body.classList.remove(`page__body--inert`);
    popup.classList.add(`visually-hidden`);
    popup.inert = true;
    header.inert = false;
    main.inert = false;
    footer.inert = false;
    popupAfter.inert = true;
    popupAfter.classList.add(`visually-hidden`);
    popupBefore.classList.remove(`visually-hidden`);
    document.removeEventListener(`keydown`, onPopupEscPress);
  }

  document.addEventListener(`click`, (e) => {
    if (e.target.classList.contains(`popup-open`)) {
      e.preventDefault();
      openPopup();
    }
  });

  popupClose.addEventListener(`click`, (e) => {
    e.preventDefault();
    closePopup();
  });

  popupButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    closePopup();
  });
})();
