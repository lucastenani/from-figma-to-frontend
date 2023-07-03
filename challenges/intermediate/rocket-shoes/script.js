let mainImg = document.getElementById("main-image");
let smallImg = document.getElementsByClassName("small-image");
let selectedImg = document.querySelector(".selected");

for (let i = 0; i < smallImg.length; i++) {
  const productImg = smallImg[i];

  productImg.onclick = () => {
    selectedImg.classList.remove("selected");
    selectedImg = productImg;
    selectedImg.classList.add("selected");
    mainImg.src = productImg.src;
  };
}

const openNav = document.getElementById("bar");
const closeNav = document.getElementById("close-nav");
const header = document.getElementsByTagName("header")[0];

openNav.addEventListener("click", () => {
  header.classList.add("active");
});

closeNav.addEventListener("click", () => {
  header.classList.remove("active");
});
