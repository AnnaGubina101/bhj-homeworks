let xhr = new XMLHttpRequest();
let items = document.querySelector('#items');

xhr.addEventListener('readystatechange', () => {

    if(xhr.readyState === xhr.DONE) {
        let image = document.querySelector('#loader');
        image.classList.remove('loader_active');
    }

    const responseAfterLoad = JSON.parse(xhr.response);
    const valutes = responseAfterLoad.response.Valute;
    const arrayFromItems = Object.values(valutes);

    arrayFromItems.forEach(item => {
        items.insertAdjacentHTML('beforeEnd', `
            <div class="item__code">${item.CharCode}</div>
            <div class="item__value">${item.Value}</div>
            <div class="item__currency">руб.</div>`)
    })
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')

xhr.send()