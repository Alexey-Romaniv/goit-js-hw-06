const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("input", checkedInput);

function checkedInput(event) {
  if (Number(inputRef.dataset.length) === event.currentTarget.value.length) {
    inputRef.classList.replace("invalid", "valid");
  } else {
    inputRef.classList.add("invalid");
  }
}
