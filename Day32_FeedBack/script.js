const toggles = document.querySelectorAll('.toggle');
const goodBtn = document.querySelector('#good');
const cheapBtn = document.querySelector('#cheap');
const fastBtn = document.querySelector('#fast');

toggles.forEach(toggle => {
    toggle.addEventListener('change',(e) => {
        check(e.target);
    });
});

function check(theClicked){
    if(goodBtn.checked && cheapBtn.checked && fastBtn.checked){
        if(goodBtn == theClicked){
            fastBtn.checked = false;
        }else if(cheap == theClicked){
            goodBtn.checked = false;
        }else{
             cheapBtn.checked = false;
        }
    }
}