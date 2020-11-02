(() => {
  const workersList = document.querySelector(`.workers__slider`);
  const workList = document.querySelector(`.work__slider`);

  let slider1 = new Swiper(workersList, {
    slidesPerView: 4,
    spaceBetween: 14,
    a11y: false,
    loop: true,
    navigation: {
      nextEl: `.workers__button--next`,
      prevEl: `.workers__button--prev`,
    }
  });

  let slider2 = new Swiper(workList, {
    slidesPerView: 1,
    spaceBetween: 30,
    a11y: false,
    loop: true,
    pagination: {
      el: `.work__dots`,
      type: `bullets`,
      clickable: true
    },
    navigation: {
      nextEl: `.work__button--next`,
      prevEl: `.work__button--prev`,
    }
  });
})();
