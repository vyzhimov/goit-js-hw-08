import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

fillTextField();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillTextField() {
  form.message.value = formData.message || '';
  form.email.value = formData.email || '';
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}
