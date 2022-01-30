let menuLink = document.querySelectorAll(".menu__link");

console.log(menuLink);
menuLink.forEach((elem) => {
    elem.addEventListener('click', (event) => {
    
    if(elem.nextElementSibling != null) {
        elem.nextElementSibling.classList.toggle('menu_active')    
           
           
       } event.preventDefault();
       
    });  
}); 
