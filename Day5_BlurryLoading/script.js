const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring,30);

function blurring(){
    load ++;
    if(load === 100){
        clearInterval(int);
    }
    loadText.innerText = `${load}%`; // gán giá trị hiện lên mh
    loadText.style.opacity = scale(load,0,100,1,0); // cho mờ dần
    bg.style.filter = `blur(${scale(load,0,100,50,0)}px)`; // blur từ 50px đến 0px
}

// chay tu 0 den 100 va mo tu 1 ve 0
const scale = (num,in_min,in_max,out_min,out_max) => {
    return ((num-in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}