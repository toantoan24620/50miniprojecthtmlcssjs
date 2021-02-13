const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
next.addEventListener('click', () => { // mỗi khi bấm vào next thì tăng currentActive lên 1, nếu tối đa r thì thôi và update lại
    currentActive++;

    if(currentActive > circles.length){
        currentActive = circles.length
    }
    update(); 
})

prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1){
        currentActive = 1;
    }
    update();
})

function update(){
    circles.forEach((circle,idx) => { // lặp mảng step
        if(idx < currentActive){ // add active vào các step đã qua
            circle.classList.add('active');
        }else{ // xoá active ở các step chưa đến
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');  // mảng các step đã qua
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if(currentActive === 1){
        prev.disabled = true;
    }else if(currentActive === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}
