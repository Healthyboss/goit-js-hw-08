import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const email = form.elements.email;
const message = form.elements.message;

form.addEventListener(
  'input',
  throttle(() => {
    const dataObject = {
      email: email.value,
      message: message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(dataObject));
  }, 500)
);

window.addEventListener('DOMContentLoaded', () => {
  const dataFromStorage = localStorage.getItem('feedback-form-state');
  if (dataFromStorage) {
    const parsedObject = JSON.parse(dataFromStorage);
    email.value = parsedObject.email;
    message.value = parsedObject.message;
  } else {
    email.value = '';
    message.value = '';
  }
});

form.addEventListener('submit', event => {
  console.log(email.value);
  console.log(message.value);
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
