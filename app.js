const loginForm = document.querySelector('.login-form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const myBank = document.getElementById('mybank');

loginForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    if (email.value === 'example@email.com' && String(password.value) === '123456') {
        window.location.href = './bank.html';
        email.value = '';
        password.value = '';
    } else {
        alert('Email or password is incorrect.')
    }
    
})

