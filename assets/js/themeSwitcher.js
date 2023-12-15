// Проверка предпочтений пользователя и применение соответствующей темы
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function applyThemeBasedOnPreference() {
  if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

applyThemeBasedOnPreference();

// Отслеживание изменений в предпочтениях системы
prefersDarkScheme.addEventListener('change', applyThemeBasedOnPreference);

// Переключатель темы
const themeToggle = document.getElementById("theme-toggle"); // предположим, у вас есть кнопка с ID 'theme-toggle'
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // Сохранение выбора пользователя
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Проверка сохраненной темы при загрузке страницы
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.add("dark-theme");
} else if (currentTheme === "light") {
  document.body.classList.remove("dark-theme");
}
