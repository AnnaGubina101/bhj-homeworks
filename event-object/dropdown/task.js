let dropContent = document.querySelector('.dropdown__value');
let list = document.querySelector('.dropdown__list');
let items = document.querySelectorAll('.dropdown__item');

dropContent.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
});

items.forEach((item, index) => {   
    item.addEventListener('click', (event) => {
        event.preventDefault();
        dropContent.textContent = event.currentTarget.textContent;
        list.classList.remove('dropdown__list_active');
    })
})