let tabs = Array.from(document.querySelectorAll('.tab'));
let tabsContent = Array.from(document.querySelectorAll('.tab__content'));
let tabActive = document.querySelector('.tab_active');
let contentActive = document.querySelector('.tab__content.tab__content_active');

tabs.forEach((item) => {
    item.addEventListener('click', (e) => {
        let currentTab = e.target.closest('.tab');
        let i = tabs.indexOf(currentTab);

        tabActive.classList.remove('tab_active');
        tabActive = item;
        tabActive.classList.add('tab_active');

        contentActive.classList.remove('tab__content_active')
        contentActive = tabsContent[i];
        contentActive.classList.add('tab__content_active');
    })
})