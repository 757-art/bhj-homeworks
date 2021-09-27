
function timer(){ 
const timer = document.getElementById("timer");
     timer.textContent = timer.textContent - 1;
     if ( timer.textContent == 0) {
        clearInterval(x);
        alert ('Вы победили в конкурсе');
    }
}; 
 let x = setInterval(timer, 1000);
