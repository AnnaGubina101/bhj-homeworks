const reveal = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', toShow);

function toShow() {
    reveal.forEach(e => {
        const {top, bottom} = e.getBoundingClientRect();
        const quarterOfReveal = (bottom - top) / 4;

        if (top + quarterOfReveal < window.innerHeight && bottom > quarterOfReveal) {
            e.classList.add("reveal_active");
        }

        if( top + quarterOfReveal > window.innerHeight || bottom < quarterOfReveal) {
            e.classList.remove("reveal_active");
        }
    })
}
