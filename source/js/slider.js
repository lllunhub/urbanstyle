(() => {
  const workersList = document.querySelector(`.workers__slider`);
  const workList = document.querySelector(`.work__slider`);
  const reviewList = document.querySelector(`.review__slider`);

  let slider1 = new Swiper(workersList, {
    slidesPerView: 1,
    spaceBetween: 14,
    a11y: false,
    navigation: {
      nextEl: `.workers__button--next`,
      prevEl: `.workers__button--prev`,
    },
    breakpoints: {
      1260: {
        slidesPerView: 4
      },
      950: {
        slidesPerView: 3
      },
      642: {
        slidesPerView: 2
      }
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

  let slider3 = new Swiper(reviewList, {
    slidesPerView: 1,
    spaceBetween: 30,
    a11y: false,
    pagination: {
      el: `.review__dots`,
      type: `bullets`,
      clickable: true
    },
    navigation: {
      nextEl: `.review__button--next`,
      prevEl: `.review__button--prev`,
    }
  });
})();
