const formRef = document.querySelector(".login-form");
const inputEmailRef = document.querySelector('input[type="email"]');
const inputPasswordRef = document.querySelector('input[type="password"]');

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (!inputEmailRef.value || !inputPasswordRef.value) {
    return alert("Заполните все поля!");
  } else {
    let { emailRef, passwordRef } = formRef.elements;
    const email = emailRef.value;
    const password = passwordRef.value;
    const formData = { email, password };
    console.log(formData);
    event.currentTarget.reset();
    return formData;
  }
}
