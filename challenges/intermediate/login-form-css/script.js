const emailIcon = document.getElementById("email-icon");
const lockIcon = document.getElementById("lock-icon");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

emailInput.addEventListener("focus", () => {
  emailIcon.src = "./images/mail-focus.svg";
});

emailInput.addEventListener("blur", () => {
  emailIcon.src = "./images/mail.svg";
});

passwordInput.addEventListener("focus", () => {
  lockIcon.src = "./images/lock-focus.svg";
});

passwordInput.addEventListener("blur", () => {
  lockIcon.src = "./images/lock.svg";
});
