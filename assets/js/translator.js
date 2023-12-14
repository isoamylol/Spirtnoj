import { loadTranslations } from "./translationsLoader.js";

document.addEventListener("DOMContentLoaded", function () {
  loadTranslations().then((translations) => {
    const userLanguage = navigator.language.split("-")[0];
    const supportedLanguages = ["en", "ru"];
    const defaultLanguage = "en";

    if (supportedLanguages.includes(userLanguage)) {
      translatePage(userLanguage, translations);
    } else {
      translatePage(defaultLanguage, translations);
    }
  });
});

function translatePage(language, translations) {
  if (!translations[language]) return;

  if (translations[language]["title"]) {
    document.title = translations[language]["title"];
  }

  document.querySelectorAll("[data-translate]").forEach((elem) => {
    const key = elem.getAttribute("data-translate");
    const translation = translations[language][key];

    if (translation) {
      // Удаление всех существующих текстовых узлов
      Array.from(elem.childNodes).forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          elem.removeChild(node);
        }
      });

      // Создание нового текстового узла с переводом
      const textNode = document.createTextNode(translation);
      elem.appendChild(textNode);
    }
  });
}
