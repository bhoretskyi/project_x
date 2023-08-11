import Account from './account.js';
import { openBurgerModal, closeBurgerModal } from './modal';

const account = new Account();

const signUp = document.querySelector('.signUp');
const signIn = document.querySelector('.signIn');
const formIn = document.querySelector('.modal-login-in');
const formUp = document.querySelector('.modal-login-up');
const formIndiv = document.querySelector('.modal-login-form-input');

if (signUp) {
    signUp.addEventListener('click', onSignUpClick);
}

if (signIn) {
    signIn.addEventListener('click', onSignInClick);
}

function onSignInClick() {
    signIn.classList.add('underline');
    signUp.classList.remove('underline');
    formIn.style.display = "block";
    formUp.style.display = "none";
}

function onSignUpClick() {
    signUp.classList.add('underline');
    signIn.classList.remove('underline');
    formIn.style.display = "none";
    formUp.style.display = "block";
}

const burgerLoginBtn = document.querySelector('.burger-login-btn');

if (burgerLoginBtn) {
  burgerLoginBtn.addEventListener('click', openBurgerModal);
}

