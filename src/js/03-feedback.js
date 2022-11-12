const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const message = form.querySelector('textarea');
const btn = form.querySelector('button');

// updateOutput();
// form.addEventListener('submit', saveMessage);

// function saveMessage(evt) {
//   evt.preventDefault();
//   localStorage.setItem(feedback-form-state, form.elements.message.value);
//   updateOutput();
//   form.reset();
// }

// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || '';
// }

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
    // showThis() {
    //   console.log(this);
  };
  const key = 'feedback-form-state';

  const save = (key, user) => {
    try {
      const serializedState = JSON.stringify(user);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  };
  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  };
  // export default {
  //   save,
  //   load,
  // };
  console.log(`E-mail: ${email.value}, Message: ${message.value}`);
  user.showThis();
  event.currentTarget.reset();
  //localStorage.removeItem("user");
}
