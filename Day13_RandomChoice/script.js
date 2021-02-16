const tagsEl = document.querySelector('.tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup',(e) => {
    createTags(e.target.value);

    if(e.key == 'Enter'){
        setTimeout(() =>{
            e.target.value = '';
        },10)

        randomSelect();
    }
})


function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    // hàm filter: lọc phần tử theo điều kiện
    // hàm map: thực hiện biểu thức trong ngoặc với tất cả các phần tử
    tagsEl.innerHTML = '';
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}
function randomSelect(){
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);

        setTimeout(() =>{
            unHighlightTag(randomTag);
        },100); // sau 100ms
    },100); // cứ 100ms thì lặp lại 

    setTimeout(() =>{
        clearInterval(interval); // dừng interval

        setTimeout(() => { // chọn ra 1 lựa chọn
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        },100);
    },times*100);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
    // Math.random() : chọn ra 1 số ngẫu nhiên từ 0 đến 1
}

function highlightTag(tag){
    tag.classList.add('highlight');
}
function unHighlightTag(tag){
    tag.classList.remove('highlight');
}