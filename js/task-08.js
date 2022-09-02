const refs = {
  form: document.querySelector('.login-form'),
}
refs.form.addEventListener('submit', onFormSubmit)
function onFormSubmit(event) {
  event.preventDefault(); 
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    email, password
    }
  if (password === '' || email === '') {
    alert('Всі поля повинні бути заповнені.');
  } 
  console.log(formData);
  refs.form.reset();
}