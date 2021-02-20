const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const sizeEl = document.getElementById('size');
const btnIn = document.getElementById('increase');
const btnDe = document.getElementById('decrease');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const eraserBtn = document.getElementById('eraser');


let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;

sizeEl.innerText = size;

canvas.addEventListener('mousedown',(e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});
canvas.addEventListener('mouseup',(e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove',(e) => {
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);

        x = x2;
        y = y2;
    }
});

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

btnIn.addEventListener('click',() => {
    if(size < 20){
        size++;
        sizeEl.innerText = size;
    }
});

btnDe.addEventListener('click',() =>{
    if(size > 1){
        size --;
        sizeEl.innerText = size;
    }
});

colorEl.addEventListener('change', (e) =>{
    color = e.target.value;
});

clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height));
eraserBtn.addEventListener('click',() => {
    if(eraserBtn.classList.contains('active')){
        eraserBtn.classList.remove('active');
        color = colorEl.value;
    }else{
        eraserBtn.classList.add('active');
        color = '#f5f5f5';
    }
});


