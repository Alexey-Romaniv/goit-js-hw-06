const formRef = document.querySelector(".login-form");
const inputEmailRef = document.querySelector('input[type="email"]');
const inputPasswordRef = document.querySelector('input[type="password"]');

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (!inputEmailRef.value || !inputPasswordRef.value) {
    return alert("Заполните все поля!");
  } else {
    let { email, password } = formRef.elements;
    const emailRef = email.value;
    const passwordRef = password.value;
    const formData = { email: emailRef, password: passwordRef };
    console.log(formData);
    event.currentTarget.reset();
    return formData;
  }
}
