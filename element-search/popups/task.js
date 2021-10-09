let modal = document.querySelector('.modal');
let modalClose = document.querySelectorAll(".modal__close");
let btnSuccess = document.querySelector('.show-success');
let modalSuccess = document.getElementById("modal_success");

modal.classList.toggle('modal_active');

modalClose.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const parentModal = this.closest('.modal');
        parentModal.classList.remove('modal_active');
    });
    
}); 

btnSuccess.addEventListener('click', function(e) {
    modalSuccess.classList.toggle('modal_active');
});
