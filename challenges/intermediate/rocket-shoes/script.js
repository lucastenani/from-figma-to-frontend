const mainImg = document.getElementById("main-image");
const smallImg = document.getElementsByClassName("small-image");
let selectedImg = document.querySelector(".selected");

function changeImage(productImg) {
  selectedImg.classList.remove("selected");
  selectedImg = productImg;
  selectedImg.classList.add("selected");
  mainImg.src = productImg.src;
}

for (let i = 0; i < smallImg.length; i++) {
  const productImg = smallImg[i];

  productImg.onclick = () => {
    changeImage(productImg);
  };
}

const openNav = document.getElementById("bar");
const closeNav = document.getElementById("close-nav");
const header = document.querySelector("header");
const activeClass = "active";

openNav.addEventListener("click", () => {
  header.classList.add(activeClass);
});

closeNav.addEventListener("click", () => {
  header.classList.remove(activeClass);
});
