$(document).ready(function () {
  // Навигация
  const navIcon = document.querySelector(".nav-icon");
  const nav = document.querySelector(".nav");

  navIcon.addEventListener("click", function () {
    this.classList.toggle("nav-icon--active");
    nav.classList.toggle("nav--active");
  });

  // Находим ссылки внутри мобильной навигации
  const navLinks = document.querySelectorAll(".nav a");

  // Обходим ссылки методом forEach
  navLinks.forEach(function (item) {
    // Для каждой ссылки добавляем прослушку по событию "Клик"
    item.addEventListener("click", function () {
      navIcon.classList.remove("nav-icon--active"); // Убираем активный класс у иконки моб. навигации
      nav.classList.remove("nav--active"); // Убираем активный класс у блока моб. навигации
    });
  });

  // Форма поиска
  const searchForm = document.querySelector(".search");
  const searchButton = document.querySelector(".search__button");

  searchButton.addEventListener("click", function (e) {
    if (!searchForm.classList.contains("search--visible")) {
      //отмена стандартного поведения (отправки формы)
      e.preventDefault();
      searchForm.classList.toggle("search--visible");
    }
  });

  // Карусель - отзывы клиентов
  const owl = $("#clients-slider");
  owl.owlCarousel({
    items: 1,
    loop: true,
  });

  const prev = $("#sliderPrev");
  const next = $("#sliderNext");

  prev.click(function () {
    owl.trigger("prev.owl.carousel");
  });

  next.click(function () {
    owl.trigger("next.owl.carousel");
  });
});
