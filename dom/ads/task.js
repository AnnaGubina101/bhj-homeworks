let allCases = Array.from(document.querySelectorAll('.rotator__case'));
let activeCase = document.querySelector('.rotator__case_active');

function rotate() {
        const allIndexes = allCases.length - 1;
        let index = allCases.indexOf(activeCase);

        activeCase.classList.remove('rotator__case_active');
        activeCase = allCases[index + 1];

        if (index === allIndexes) {
            index = 0;
            activeCase = allCases[index]
        }

        activeCase.classList.add('rotator__case_active');
}

setInterval(rotate, 1000);