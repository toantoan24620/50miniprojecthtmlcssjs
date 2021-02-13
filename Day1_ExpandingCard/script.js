const panels = document.querySelectorAll('.panel'); // lấy ra list các phần tử có class là panel

panels.forEach( (panel) => { // lặp list
    panel.addEventListener('click', () => { // mếu có sự kiện ở từng phần từ thì add class active
        removeActiveClasses();
        panel.classList.add('active');
    })
})
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}