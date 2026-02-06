document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.getElementById("burgerBtn");
  const navList = document.querySelector(".nav__list");
  const navOverlay = document.getElementById("navOverlay");
  const navLinks = document.querySelectorAll(".nav__link");

  // Функция открытия/закрытия меню
  function toggleMenu() {
    const isOpen = burgerBtn.classList.contains("active");

    burgerBtn.classList.toggle("active");
    burgerBtn.setAttribute("aria-expanded", !isOpen);
    navList.classList.toggle("active");
    navOverlay.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  }

  // Обработчик клика на бургер
  burgerBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  // Обработчик клика на оверлей
  navOverlay.addEventListener("click", function () {
    toggleMenu();
  });

  // Закрытие меню при клике на ссылку
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 767) {
        toggleMenu();
      }
    });
  });

  // Закрытие меню при нажатии ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && burgerBtn.classList.contains("active")) {
      toggleMenu();
    }
  });

  // Закрытие меню при клике вне его
  document.addEventListener("click", function (e) {
    if (
      window.innerWidth <= 767 &&
      navList.classList.contains("active") &&
      !navList.contains(e.target) &&
      !burgerBtn.contains(e.target)
    ) {
      toggleMenu();
    }
  });

  // Адаптация при изменении размера окна
  window.addEventListener("resize", function () {
    if (window.innerWidth > 767) {
      burgerBtn.classList.remove("active");
      burgerBtn.setAttribute("aria-expanded", "false");
      navList.classList.remove("active");
      navOverlay.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });
});
