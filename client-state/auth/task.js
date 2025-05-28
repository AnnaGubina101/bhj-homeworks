
const xhr = new XMLHttpRequest();
const signIn = document.querySelector('.signin')
const form = document.querySelector('.signin__form')
const btn = document.querySelector('#signin__btn')
const welcome = document.querySelector('.welcome')
const userId = document.querySelector('#user_id')

function formSend() {
    const formData = new FormData(form);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';

    xhr.onload = () => {
        if(xhr.response.success) {
            signIn.classList.remove('signin_active')
            localStorage.user = xhr.response.user_id;
            welcome.classList.add('welcome_active');
            userId.textContent = xhr.response.user_id;
        } else {
            alert('«Неверный логин/пароль»')
        }
    }

    if(localStorage.getItem('user')) {
        welcome.classList.add('welcome_active');
        userId.textContent = localStorage.getItem('user')
    } else {
        signIn.classList.add('signin_active');
    }
    
    form.reset();
    xhr.send(formData);
}

btn.addEventListener('click', formSend)