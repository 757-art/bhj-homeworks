let newTaskField = document.querySelector('.tasks__input');
let taskList = document.querySelector('.tasks__list');
let form = document.getElementById('tasks__form');
let tasks = document.querySelectorAll('.task');

form.onsubmit = function() {
    let text = newTaskField.value;
    if (text != '') {
        taskList.insertAdjacentHTML("beforeend", `<div class="task">
        <div class="task__title">${text}</div>
        <a href="#" class="task__remove">
        &times;
        </a>
        </div>`)
        let remover = document.querySelectorAll('.task__remove');
        for (let i = 0; i < remover.length; i++) {
            i = remover[remover.length -1] 
            i.addEventListener('click', function(){
                i.parentElement.remove();
            })
        }
    
          
    }
    newTaskField.value = '';
    return false;
};


