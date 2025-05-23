const textArea = document.querySelector('#editor')

localStorage.setItem('text', textArea);
const currentText = localStorage.getItem('text');
if(currentText) {
    textArea.value = currentText;
}