/**
 * @copyright Akumu
 * @author Sadee <romanvasylenko14@gmail.com>
 */

"use strict";

/**
 *  Light and dark mode
 */

const /** {NodeElement} */ $themeBtn =
    document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML = document.documentElement;
let /** {Boolean | String} */ isDark = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
}

const changeTheme = () => {
  $HTML.dataset.theme =
    sessionStorage.getItem("theme") == "light" ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
};

$themeBtn.addEventListener("click", changeTheme);

/**
 * TAB
 */

const /** {NodeList} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /** {NodeElement} */ [lastActiveTab] =
    document.querySelectorAll("[data-tab-content]");
let /** {NodeElement} */ [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach((item) => {
  item.addEventListener("click", function () {
    lastActiveTab.classList.remove("active");
    lastActiveTabBtn.classList.remove("active");

    const /** {NodeElement} */ $tabContent = document.querySelector(
        `[data-tab-content="${item.dataset.tabBtn}"]`
      );
    $tabContent.classList.add("active");
    this.classList.add("active");

    lastActiveTab = $tabContent;
    lastActiveTabBtn = this;
  });
});

//////////////////////////////////////////
// Отримуємо всі елементи з класом "card"
const cards = document.querySelectorAll(".card");

// Додаємо обробник події "click" до кожного елемента "card"
cards.forEach(function (card) {
  const imgHolder = card.querySelector(".img-holder");
  const img = imgHolder.querySelector("img");

  card.addEventListener("click", function () {
    if (!card.classList.contains("active")) {
      // Створюємо модальне вікно
      const modal = document.createElement("div");
      modal.classList.add("modal");

      // Створюємо зображення для модального вікна
      const modalImg = document.createElement("img");
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalImg.classList.add("modal-img");

      // Додаємо зображення до модального вікна
      modal.appendChild(modalImg);

      // Додаємо модальне вікно до body
      document.body.appendChild(modal);

      // Використовуємо setTimeout, щоб додати клас "enlarged" після додавання модального вікна до DOM, щоб спрацювали CSS-переходи
      setTimeout(function () {
        modalImg.classList.add("enlarged");
      }, 0);

      // Змінюємо клас "active" у карточці, щоб зберегти стан відкритого модального вікна
      card.classList.add("active");

      // Додаємо обробник події "click" до зображення у модальному вікні для зменшення зображення при повторному кліку
      modalImg.addEventListener("click", function () {
        modal.remove();
        card.classList.remove("active");
      });
    } else {
      // Закриття модального вікна при повторному кліку на карточку
      const modal = document.querySelector(".modal");
      if (modal) {
        modal.remove();
      }
      card.classList.remove("active");
    }
  });
});
////////////////////////////////////////////////
