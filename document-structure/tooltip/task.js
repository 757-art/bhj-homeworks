let selectItems = document.querySelectorAll('.has-tooltip');
// let tooltip = document.querySelector('.tooltip');
tooltip = document.createElement('div');
tooltip.className = 'tooltip';

selectItems.forEach((elem) => {
    let coords = elem.getBoundingClientRect();
    let left = coords.left;
    let top = coords.top - tooltip.offsetHeight + 20;
    elem.addEventListener('click', stopDefAction, false)

    function stopDefAction(evt) {
        tooltip.classList.toggle('tooltip_active');
        tooltip.innerHTML = elem.title
        evt.preventDefault();
        elem.insertAdjacentElement("beforebegin", tooltip)
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
    }
     
});