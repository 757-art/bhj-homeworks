let xhr = new XMLHttpRequest();
let loader = document.getElementById('loader');
let itemsContainer = document.getElementById('items');


xhr.open('GET', ' https://netology-slow-rest.herokuapp.com')
xhr.send();

xhr.onreadystatechange = function() {
   
    if (xhr.readyState === 4) {
        loader.classList.remove('loader_active')
        let items = JSON.parse(xhr.responseText).response.Valute;
        let itemsArr = Object.values(items);
            console.log(Object.values(items))
        //    let itemElem = document.querySelector('.item');   
        itemsArr.forEach(elem => {
            let itemElem = document.createElement('div');
            itemElem.className = 'item';
            itemsContainer.append(itemElem);

            let itemCode = document.createElement('div');
            itemCode.className = 'item__code';
            itemElem.append(itemCode);

            let itemValue = document.createElement('div');
            itemValue.className = 'item__value';
            itemElem.append(itemValue);

            let itemCurr = document.createElement('div');
            itemCurr.className = 'item__currency';
            itemCurr.innerHTML = 'руб.'
            itemElem.append(itemCurr);

            itemCode.innerHTML = elem.CharCode;
            itemValue.innerHTML = elem.Value;
        });

    }
}