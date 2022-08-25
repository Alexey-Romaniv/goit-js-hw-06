const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);
const totalNumberRef = document.querySelector("#value");
let counterValue = 0;

decrementBtnRef.addEventListener("click", () => {
  counterValue -= 1;
  totalNumberRef.textContent = counterValue;
  return counterValue;
});
incrementBtnRef.addEventListener("click", () => {
  counterValue += 1;
  totalNumberRef.innerHTML = counterValue;
  return counterValue;
});
