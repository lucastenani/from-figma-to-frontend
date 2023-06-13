const mailInput = document.getElementById("email");
const emailIcon = document.getElementById("email-icon");

const passwordInput = document.getElementById("password");
const lockIcon = document.getElementById("lock-icon");

passwordInput.addEventListener("focus", () => {
  lockIcon.src = "./images/lock-focus.svg";
});

passwordInput.addEventListener("blur", () => {
  lockIcon.src = "./images/lock.svg";
});

mailInput.addEventListener("focus", () => {
  emailIcon.src = "./images/mail-focus.svg";
});

mailInput.addEventListener("blur", () => {
  emailIcon.src = "./images/mail.svg";
});
