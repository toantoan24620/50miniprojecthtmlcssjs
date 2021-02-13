const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes);

checkBoxes();
function checkBoxes(){
    const triggerBottom = window.innerHeight/5 * 4; // điểm cuối cùng của màn hình

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; // getBoundingClientRect cung cấp size và vị trí của phần tử của nó trong khung hình
        
        if(boxTop < triggerBottom){ // nếu khung này nhỏ hơn diểm cuối cùng thì hiện nó lên
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}