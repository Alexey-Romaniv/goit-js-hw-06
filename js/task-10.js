function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const countDivBoxes = document.querySelector("input[type='number']");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const newBoxesPlace = document.querySelector("#boxes");

let numberRef;
countDivBoxes.addEventListener("input", (event) => {
  numberRef = event.currentTarget.value;
});
createBtn.addEventListener("click", (event) => {
  createBoxes(+numberRef);
});
let size = 30;
function createBoxes(amount) {
  let allDiv = [];
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    allDiv.push(newDiv);
  }
  for (let i = 0; i < allDiv.length; i++, size += 10) {
    const div = allDiv[i];
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
  }
  newBoxesPlace.append(...allDiv);
}

destroyBtn.addEventListener("click", (event) => {
  newBoxesPlace.innerHTML = "";
  size = 30;
});
