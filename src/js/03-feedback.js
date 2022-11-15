const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const message = document.querySelector('textarea');
const btn = document.querySelector('button');

form.addEventListener('input', throttle(savingData, 500));

function savingData(event) {
  try {
    event.preventDefault();
    const {
      elements: { email, message },
    } = form;
    const user = {
      email: email.value,
      message: message.value,
    };
    const serializedUser = JSON.stringify(user);
    localStorage.setItem('feedback-form-state', serializedUser);
  } catch (error) {
    console.log(error);
  }
}
function loadingData() {
  const userData = localStorage.getItem('feedback-form-state');
  const deserializedUser = JSON.parse(userData);
  try {
    if (userData === null) {
      return (input.value = '');
    }
    input.value = deserializedUser.email;
    message.value = deserializedUser.message;
  } catch (error) {
    console.log(error);
    return userData;
  }
}

loadingData();
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  const user = {
    email: email.value,
    message: message.value,
  };
  console.log(`E-mail: ${email.value}, Message: ${message.value}`);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
