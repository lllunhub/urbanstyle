(() => {
  const body = document.querySelector(`.page__body`);
  const header = document.querySelector(`.header`);
  const main = document.querySelector(`.main`);
  const footer = document.querySelector(`.footer`);
  const review = document.querySelector(`.review__wrap--modal`);
  const reviewClose = document.querySelectorAll(`.review__close`);
  const reviewMore = document.querySelectorAll(`.review__more`);

  const reviewImgPage = document.querySelectorAll(`.review__img--page`);
  const reviewNamePage = document.querySelectorAll(`.review__name--page`);
  const reviewCityPage = document.querySelectorAll(`.review__city--page`);
  const reviewTextPage = document.querySelectorAll(`.review__wrap-text--page`);
  const reviewListPage = document.querySelectorAll(`.review__galery-list--page`);

  const reviewImgModal = document.querySelector(`.review__img--modal`);
  const reviewNameModal = document.querySelector(`.review__name--modal`);
  const reviewCityModal = document.querySelector(`.review__city--modal`);
  const reviewTextModal = document.querySelector(`.review__wrap-text--modal`);
  const reviewListModal = document.querySelector(`.review__galery-list--modal`);

  review.inert = true;

  function onPopupEscPress(e) {
    if (e.key === `Escape`) {
      e.preventDefault();
      closePopup();
    }
  }

  function openPopup(value) {
    const imgSrc = reviewImgPage[value].src;
    const imgAlt = reviewImgPage[value].alt;
    const name = reviewNamePage[value].textContent;
    const city = reviewCityPage[value].textContent;

    body.classList.add(`page__body--inert`);
    review.classList.remove(`visually-hidden`);
    review.inert = false;
    header.inert = true;
    main.inert = true;
    footer.inert = true;

    reviewImgModal.src = imgSrc;
    reviewImgModal.alt = imgAlt;
    reviewNameModal.textContent = name;
    reviewCityModal.textContent = city;

    for (let i = 0; i < reviewTextPage[value].children.length; i++) {
      const text = reviewTextPage[value].children[i];

      reviewTextModal.appendChild(text.cloneNode(true));
    }

    for (let i = 0; i < reviewListPage[value].children.length; i++) {
      const list = reviewListPage[value].children[i];

      reviewListModal.appendChild(list.cloneNode(true));
    }

    for (let i = 0; i < reviewListModal.children.length; i++) {
      const link = reviewListModal.children[i].children[0];
      link.removeAttribute(`href`);
    }

    document.addEventListener(`keydown`, onPopupEscPress);
  }

  function closePopup() {
    body.classList.remove(`page__body--inert`);
    review.classList.add(`visually-hidden`);
    review.inert = true;
    header.inert = false;
    main.inert = false;
    footer.inert = false;

    reviewImgModal.src = ``;
    reviewImgModal.alt = ``;
    reviewNameModal.textContent = ``;
    reviewCityModal.textContent = ``;

    for (let i = reviewTextModal.children.length - 1; i >= 0; i--) {
      const child = reviewTextModal.children[i];
      child.parentElement.removeChild(child);
    }

    for (let i = reviewListModal.children.length - 1; i >= 0; i--) {
      const child = reviewListModal.children[i];
      child.parentElement.removeChild(child);
    }

    document.removeEventListener(`keydown`, onPopupEscPress);
  }

  for (let i = 0; i < reviewMore.length; i++) {
    reviewMore[i].addEventListener(`click`, (e) => {
      e.preventDefault();
      openPopup(i);
    });
  }

  for (let i = 0; i < reviewClose.length; i++) {
    reviewClose[i].addEventListener(`click`, (e) => {
      e.preventDefault();
      closePopup();
    });
  }
})();
