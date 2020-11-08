(() => {
  const wrap = document.querySelector(`.about__wrap div`);
  const more = document.querySelector(`.about__more`);

  more.classList.add(`about__more--closed`);

  more.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (e.target.classList.contains(`about__more--closed`)) {
      wrap.style.height = `100%`;
      wrap.style.overflowY = `visible`;
      more.classList.add(`about__more--opened`);
      more.classList.remove(`about__more--closed`);
      more.textContent = `Скрыть`;
    } else if (e.target.classList.contains(`about__more--opened`)) {
      wrap.style.height = `254px`;
      wrap.style.overflowY = `hidden`;
      more.classList.add(`about__more--closed`);
      more.classList.remove(`about__more--opened`);
      more.textContent = `Показать полностью`;
    }
  });
})();
