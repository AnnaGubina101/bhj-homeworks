let book = document.querySelector('.book');
let fontSize = Array.from(document.querySelectorAll('.font-size'));
let active = document.querySelector('.font-size_active');

fontSize.forEach(el => {
    el.addEventListener('click', (event) => {
        event.preventDefault();

        active.classList.remove('font-size_active');
        active = el;
        active.classList.add('font-size_active');

        book.classList.remove('book_fs-big', 'book_fs-small');

        if (active.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
        } else if (active.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
        }
    })
})