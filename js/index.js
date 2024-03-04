window.addEventListener('DOMContentLoaded', function () {

  // burger
  document.querySelector('#burger__button').addEventListener('click', function () {
    document.querySelector('#burger-menu').classList.add('is-active')
  });
  document.querySelector('#close-burger-button').addEventListener('click', function () {
    document.querySelector('#burger-menu').classList.remove('is-active')
  });

  // search
  document.querySelector('#btn-open').addEventListener('click', function () {
    document.querySelector('#header-form').classList.add('form__active')
  });
  document.addEventListener('click', function (el) {
    let target = el.target;
    let headerForm = document.querySelector('#header-form');
    if (!target.closest('.header-form-container')) {
      headerForm.classList.remove('form__active');
      headerForm.querySelector('input').value = "";
      document.querySelector('#header-form').classList.remove('form__active')
    }
  });
  document.querySelector('#btn-close').addEventListener('click', function () {
    document.querySelector('#header-form').classList.remove('form__active')
  });

  // slider
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 76,
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

  // tabs
  document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
        btn.classList.remove('tabs-nav__btn--active')
      });
      e.currentTarget.classList.add('tabs-nav__btn--active');
      document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('tabs-item--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
  });

  // acardion
  $(".accordion").accordion({
    activate: false,
    collapsible: true
  });
});
