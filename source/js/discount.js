(() => {
  const image = document.querySelector(`.image`);
  const title = document.querySelector(`.item-form__title`);

  if (image.children.length === 1) {
    title.innerHTML = `Специальное предложение: Cкидка на услугу <span>10%</span>`;
  } else {
    title.innerHTML = `Онлайн заявка`;
  }
})();
