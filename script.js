const container = document.querySelector('.container');
let color = Math.floor(Math.random()*255);

const createbox = () => {
        const box = document.createElement('div');
        box.className= 'box';
        box.style.backgroundColor = `rgb(${color},${color},${color})`;
        container.appendChild(box);
    }
    
createbox();    
document.querySelector(".container").addEventListener('mouseover', (e) => {
    if(e.target.className === 'box'){
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
        const body = document.querySelector("body");
        body.style.backgroundColor = e.target.style.backgroundColor;
    }
})
