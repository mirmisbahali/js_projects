const todoInput = document.querySelector('#todoItem');
const todoList = document.querySelector('#todoList');
const addBtn = document.querySelector('#addBtn');
let tasks = null

// ListItem Component
const ListItem = (item) => {
    const li = document.createElement('LI');
    const text = document.createTextNode(item);

    li.appendChild(text);
    li.classList.add('list-group-item');
    return li;
}







