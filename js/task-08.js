const formRef = document.querySelector(".login-form");
const inputEmailRef = document.querySelector('input[type="email"]');
const inputPasswordRef = document.querySelector('input[type="password"]');

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (!inputEmailRef.value || !inputPasswordRef.value) {
    return alert("Заполните все поля!");
  } else {
    const email = formRef.elements.email.value;
    const password = formRef.elements.password.value;
    const formData = { email, password };
    console.log(formData);
    event.currentTarget.reset();
    return formData;
  }
}
