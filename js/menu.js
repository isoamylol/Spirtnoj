document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menu-toggle").onclick = function () {
    document.querySelector("nav").classList.toggle("active");
  };
});
