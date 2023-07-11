const checkButton = document.getElementById("checkbox");
const body = document.querySelector("body").classList;

checkButton.addEventListener("change", (e) => {
  let isCheck = e.target.checked;

  isCheck ? body.add("dark") : body.remove("dark");
});
