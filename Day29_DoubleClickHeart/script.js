const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let timesClicked = 0;

loveMe.addEventListener('dblclick', (e) => {
    createHeart(e);
});

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX; // toạ độ con trỏ chuột
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft; // ảnh cách trái 
    const topOffset = e.target.offsetTop; // ảnh cách trên ??

    const xInside = x - leftOffset; // vị trí của heart so với ảnh
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild(heart);

    times.innerHTML = ++timesClicked;

    setTimeout(() => heart.remove(), 1000);
}