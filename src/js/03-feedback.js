import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInput = formEl.elements['email'];
const messageInput = formEl.elements['message'];

const dataForm = JSON.parse(localStorage.getItem('feedback-form-state'));
if (dataForm) {
emailInput.value = dataForm.email;
messageInput.value = dataForm.message;
};

let valueForm = {
email: '',
message: '',
};

emailInput.addEventListener('input', throttle(e => {
valueForm.email = e.target.value;
localStorage.setItem('feedback-form-state', JSON.stringify(valueForm));
}, 500)),

messageInput.addEventListener('input', throttle(e => {
valueForm.message = e.target.value;
localStorage.setItem('feedback-form-state', JSON.stringify(valueForm));
}, 500)),

formEl.addEventListener('submit', e => {
e.preventDefault();
console.log(valueForm);
localStorage.removeItem('feedback-form-state');
emailInput.value = '';
messageInput.value = '';
});