// №1
const clicker = () => {
const first = document.querySelector("p")
first.textContent = "Текст изменен"

}
const mybtn =document.querySelector(".mybtn")
mybtn.addEventListener("click", clicker)

// №2
const block = document.getElementById('myBlock');

block.addEventListener('mouseenter', function() {
    block.classList.add('hovered');
});

block.addEventListener('mouseleave', function() {
    block.classList.remove('hovered');
});

// №3
const button = document.getElementById('toggleButton');
const div = document.getElementById('myDiv');

button.addEventListener('click', () => {
    if (div.style.display === 'none') {
    div.style.display = 'block';
    button.textContent = 'Скрыть элемент';
    } 
    else {
    div.style.display = 'none';
    button.textContent = 'Показать элемент';
    }
});
// №4
function changeBg() {
    let block = document.getElementById('block1');
    if (block.style.background === 'red') {
    block.style.background = 'skyblue';
    } 
    else {
    block.style.background = 'red';
    }
}
function changeFont() {
    let block = document.getElementById('block2');
    if (block.style.fontSize === '40px') {
    block.style.fontSize = '16px';
    }
    else {
    block.style.fontSize = '40px';
    }
}
function changeStyle() {
    let block = document.getElementById('block3');
    if (block.style.border === '6px solid green') {
    block.style.border = 'none';
    } 
    else{
    block.style.border = '6px solid green';
    }
}
// №5 
const input = document.getElementById('itemInput');
    const addButton = document.getElementById('addButton');
    const list = document.getElementById('dynamicList');

function addNewItem() {
    const text = input.value.trim();
            
    if (text === '') {
    alert('введите текст элемента');
    return;
    }
            
    const li = document.createElement('li');
            

    const span = document.createElement('span');
    span.textContent = text;
            
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.className = 'delete-btn';
            
    deleteBtn.onclick = function() {
    li.remove();
    };
       
    li.appendChild(span);
    li.appendChild(deleteBtn);
            
    list.appendChild(li);
            
    input.value = '';
    input.focus();
}
        
addButton.onclick = addNewItem;

const deleteButtons = document.querySelectorAll('.delete-btn');
    for (let btn of deleteButtons) {
    btn.onclick = function() {
    btn.parentElement.remove();
    };
}
// №6
    const cells = document.querySelectorAll('#colorTable td');

    cells.forEach(cell => {
        cell.addEventListener('click', function() {
        this.classList.toggle('green');
        });
    });