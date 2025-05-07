let input = document.querySelector('.tasks__input');
let btn = document.querySelector('.tasks__add');
let list = document.querySelector('.tasks__list');
let form = document.querySelector('form');

form.addEventListener('submit', ev => {
    ev.preventDefault();
})
// document.addEventListener( 'keyup', event => {
//     event.preventDefault();
//     if( event.code === 'Enter' ) {console.log('enter was pressed')};
//   });

btn.addEventListener('click', () => {
    if (input.value.length > 0) {
        let tasks = list.insertAdjacentHTML('afterend', `<div class="task">
        <div class="task__title">
           ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`) 
    }
})
 
tasks.addEventListener('click', (event) => {
    if (event.target.classList.contains('task__remove')) {
      event.target.closest('.task').remove();
    }
  });