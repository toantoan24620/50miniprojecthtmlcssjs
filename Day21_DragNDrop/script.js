const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);

for(const empty of empties){
    empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop',dragDrop);
}

function dragStart(){ // this ở đây là phần tử đang được trỏ đến
    this.className += ' hold'; // this ở đây là của fill
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd(){ // kichs hoạt khi kết thúc thao tác kéo
    this.className = 'fill'; // loại bỏ invisible
    // this ở đây là của fill
}

function dragOver(e){ // được kích hoạt khi một phần tử hoặc lựa chọn văn bản đang được kéo qua một mục tiêu thả hợp lệ ( cu moi 100ms)
    e.preventDefault(); // chan event mac dinh
}

function dragEnter(e){// được kích hoạt khi phần tử được kéo đi vào mục tiêu thả hợp lệ.
    e.preventDefault();
    this.className += ' hovered'; // this ở đây là phần tử đang được trỏ đến
}

function dragLeave(){ //được kích hoạt khi phần tử được kéo rời khỏi mục tiêu thả hợp lệ.
    this.className = 'empty'; // this ở đây là phần tử đang được trỏ đến
}

function dragDrop(){ // được kích hoạt khi một phần tử bị loại bỏ trên mục tiêu thả hợp lệ.
    this.className = 'empty';
    this.append(fill);
    // this ở đây là phần tử đang được trỏ đến
}