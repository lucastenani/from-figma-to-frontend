const checkButton = document.getElementById("checkbox");
const body = document.querySelector("body").classList;
const localStorageKey = "themeState";
const savedState = localStorage.getItem(localStorageKey);
const prefersDarkTheme =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

checkButton.checked = savedState === "true" || prefersDarkTheme;
body.toggle("dark", checkButton.checked);

checkButton.addEventListener("change", () => {
  const isCheck = checkButton.checked;

  body.toggle("dark", isCheck);
  localStorage.setItem(localStorageKey, isCheck);
});
