
const xhr = new XMLHttpRequest();
const form = document.querySelector('.signin')
const btn = document.querySelector('#signin__btn')
const welcome = document.querySelector('.welcome')
const userId = document.querySelector('#user_id')

function formSend() {
    const formData = new FormData(form);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';

    xhr.addEventListener('readystatechange', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            if(xhr.response.success) {
                form.classList.remove('signin_active')
                localStorage.user = xhr.response.user_id;
                welcome.classList.add('welcome_active');
                userId.textContent = xhr.response.user_id;
            } else {
                alert('«Неверный логин/пароль»')
            }

            if(localStorage.getItem('user')) {
                welcome.classList.add('welcome_active');
                 userId.textContent = localStorage.getItem('user')
            }
        }
    })
    
    xhr.send(formData);
}

btn.addEventListener('click', formSend)