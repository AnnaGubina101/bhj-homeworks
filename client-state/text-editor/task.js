const textArea = document.querySelector('#editor')
const currentText = localStorage.getItem('text');

textArea.value = currentText;
textArea.addEventListener('input', () => {
    localStorage.setItem('text', textArea.value);
})