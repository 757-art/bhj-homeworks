
const image = document.getElementById('cookie');

const bigsize = '500';
const smallsize = '200';

let clicks = 0;    
function myClick(){
    clicks += 1;
   const count = document.getElementById('clicker__counter');
   count.textContent = clicks;
   if (image.width == smallsize){
        image.width = bigsize;
    } else (image.width = smallsize);
};

image.onclick = myClick
