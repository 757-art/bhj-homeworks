let data = document.getElementById('form');
const progress = document.getElementById('progress');


data.addEventListener('submit', (e) => {
let xhr = new XMLHttpRequest();
    formData = new FormData(data);
        

        xhr.upload.onprogress = function(event) {
            if (event.total/event.loaded == 1) {
                progress.value = 1;
            } else if (event.total/event.loaded > 0/5) {
                progress.value = 0.6;
            } else {
                progress.value = 0.3;
            }
            console.log(`${event.loaded} из ${event.total}`);
        }

        xhr.onloadend = function() {
            if (xhr.status == 200) {
                console.log('Успех');
            } else {
                console.log(this.status);
            }
        }
        

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.send(formData);
    e.preventDefault();
}) 










// xhr.onload = () => alert(xhr.response);

