let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    const responseAfterLoad = JSON.parse(xhr.response);
    const titles = responseAfterLoad['data']['title'];
    const answers = responseAfterLoad['data']['answers'];

    const arrayFromAnswers = Object.values(answers);

    let pollAnswers = document.querySelector('.poll__answers');
    let title = document.querySelector('.poll__title');

    title.insertAdjacentHTML('beforeend', `
      <div class="poll__title" id="poll__title">${titles}</div>`)

    arrayFromAnswers.forEach(answer => {
        pollAnswers.insertAdjacentHTML('beforeend', `
          <button class="poll__answer">${answer}</button>`)
    })

    pollAnswers.addEventListener('click', (event) => {
      if(event.target.classList.contains('poll__answer')) {
        alert('Спасибо, Ваш голос засчитан!');
      }
    })
  }
  
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();