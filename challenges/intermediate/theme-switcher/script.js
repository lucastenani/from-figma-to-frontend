const checkButton = document.getElementById("checkbox");
const body = document.querySelector("body").classList;
const localStorageKey = "themeState";
const savedState = localStorage.getItem(localStorageKey);

if (savedState === "true") {
  checkButton.checked = true;
  body.add("dark");
} else {
  checkButton.checked = false;
  body.remove("dark");
}

checkButton.addEventListener("change", () => {
  let isCheck = checkButton.checked;

  isCheck ? body.add("dark") : body.remove("dark");

  localStorage.setItem(localStorageKey, isCheck);
});
