import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');
const emailInpRef = document.querySelector('input[name="email"]');

const messageInpRef = document.querySelector('textarea[name="message"]');

feedbackFormRef.addEventListener('submit', onSubmitHandle);

let values = {};
const FEEDBACK = 'feedback-form-state';

updateOutputs();

const updThrottled = throttle(function onInputHandle(evt) {
  values[evt.target.name] = evt.target.value;
  localStorage.setItem(FEEDBACK, JSON.stringify(values));
}, 500);

feedbackFormRef.addEventListener('input', updThrottled);

function updateOutputs() {
  if (localStorage.getItem(FEEDBACK)) {
    values = JSON.parse(localStorage.getItem(FEEDBACK));
    if (values.email) {
      emailInpRef.value = values.email;
    }
    if (values.message) {
      messageInpRef.value = values.message;
    }
  }
}

function onSubmitHandle(evt) {
  evt.preventDefault();
  if (values.email && values.message) {
    console.log(values);
    localStorage.removeItem(FEEDBACK);
    values = {};
    evt.currentTarget.reset();
  } else {
    alert(`Please fill all required fields`);
  }
}
