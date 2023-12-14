function loadTranslations() {
  const url = "assets/locale/translations.json";

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Could not load translations:", error);
    });
}

export { loadTranslations };
