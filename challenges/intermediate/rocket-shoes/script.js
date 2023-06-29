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
