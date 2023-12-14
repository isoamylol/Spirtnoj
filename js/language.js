document.addEventListener("DOMContentLoaded", function () {
  const userLanguage = navigator.language || navigator.userLanguage;
  const supportedLanguages = ["en", "ru"];
  if (supportedLanguages.includes(userLanguage)) {
    if (userLanguage === "en") {
    } else if (userLanguage === "ru") {
    }
  } else {
  }
});
