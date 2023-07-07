const barButton = document.getElementById("bar");
const sidebar = document.querySelector("header");
const mainPadding = document.querySelector("main");

barButton.addEventListener("click", () => {
  sidebar.classList.toggle("open-sidebar");
  mainPadding.classList.toggle("open-sidebar");
});
