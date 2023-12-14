document.addEventListener("DOMContentLoaded", function () {
  const userLanguage = navigator.language || navigator.userLanguage;
  const path = window.location.pathname;

  // Проверяем, не содержит ли URL уже языковой суффикс
  const isRussian = path.includes("_ru.html");
  const isEnglish = path.includes("_en.html");

  // Если язык пользователя - русский и URL не русская версия
  if (userLanguage.startsWith("ru") && !isRussian) {
    // Заменяем суффикс на '_ru.html' или добавляем его, если его нет
    window.location.href = isEnglish
      ? path.replace("_en.html", "_ru.html")
      : path.replace(".html", "_ru.html");
  }
  // Если язык пользователя - не русский и URL не английская версия
  else if (!userLanguage.startsWith("ru") && !isEnglish) {
    // Заменяем суффикс на '_en.html' или добавляем его, если его нет
    window.location.href = isRussian
      ? path.replace("_ru.html", "_en.html")
      : path.replace(".html", "_en.html");
  }
});
