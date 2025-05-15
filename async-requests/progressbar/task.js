const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    const progress = document.getElementById('progress');

    xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
            const persent = event.loaded / event.total;
            progress.value = persent;
        }
    }
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(form);
    xhr.send(formData);
})

