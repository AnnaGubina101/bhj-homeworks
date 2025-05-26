const modalClose = document.querySelector('.modal__close');
const subscribeModal = document.querySelector('#subscribe-modal');

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
    const pair = document.cookie.split('; ');
    const cookie = pair.find(p => p.startsWith(name + '='));
    return cookie;
}

function modalActions () {
    if(!getCookie('modalClosed')) {
        subscribeModal.classList.add('modal_active');
    }

    modalClose.addEventListener('click', () => {
        subscribeModal.classList.remove('modal_active');
        setCookie('modalClosed', true);
    })
}

modalActions();