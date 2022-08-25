function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector(".change-color");
const colorValueRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

btnRef.addEventListener("click", onChangedBackground);

function onChangedBackground(event) {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  colorValueRef.textContent = color;
}
