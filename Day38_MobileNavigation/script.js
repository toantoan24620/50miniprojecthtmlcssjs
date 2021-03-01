const listMenu = document.querySelectorAll('li');
const contents = document.querySelectorAll('.content');

listMenu.forEach((item,idx) => {
    item.addEventListener('click', () => {
        hideAllContents();
        removeActive();
        item.classList.add('active');

        contents[idx].classList.add('show');
    });
});

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'));
};

function removeActive(){
    listMenu.forEach(item => item.classList.remove('active'));
};