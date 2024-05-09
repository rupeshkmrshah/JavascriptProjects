const inputtdl = document.querySelector('.textarea')
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault()
    addTodo()
}

// adding todoList
function addTodo() {
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputtdl.value
    itemall.appendChild(item)

    if (inputtdl.value === '') return

    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)

    listtdl.appendChild(itemall)
    inputtdl.value = ''
}

// checking and delete todoList 
function okdel(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

//editable list
let isEditing = false;
let currentItem;
function startEdit(e){
    isEditing=true;
    currentItem=e.target.parentNode;
    showInput(currentItem);
}

function cancelEdit(){
    isEditing=false;
    hideInput();
}

function saveEdit(){
    let text=input.value;
    if(!text)return;
    currentItem.innerHTML=text;
    isEditing=false;
    hideInput();
    currentItem.classList.remove("editing");
}

function keyCheck(e){
    if(e.key==="Enter")
        saveEdit();
    else if(e.key==='Escape')
        cancelEdit();
}

function showInput(item){
    input.style.display="block";
    input.focus();
    input.value=item.innerText;
    item.classList.add("editing");
    input.addEventListener('keydown',keyCheck);
}

function hideInput(){
    input.style.display="none";
    input.removeEventListener('keydown',keyCheck);
}

buttontdl.addEventListener('click', clickButton)
listtdl.addEventListener('click', okdel)