const time = document.getElementById("timer");
function winning (){
        time.textContent -= 1;
}
const intervalId = setInterval(winning, 1000);

setTimeout(() => { 
       clearInterval(intervalId);
       alert('Вы победили в конкурсе!'); 
}, 59000);
