import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const { email, message } = formEl;

fillForm();

formEl.addEventListener('input', throttle(formInput, 500));
formEl.addEventListener('submit', formSubmit);

function formInput() {
const formData = {email: email.value, message: message.value};
localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function formSubmit (event) {
event.preventDefault(); 
const formData = {email: email.value, message: message.value};
console.log(formData);
localStorage.removeItem("feedback-form-state");
event.currentTarget.reset();
}

function fillForm() {
const formData = JSON.parse(localStorage.getItem("feedback-form-state"));

if(formData) {
    email.value = formData.email;
    message.value = formData.message;
    }
}