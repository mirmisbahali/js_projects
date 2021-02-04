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

// Fetching Tasks
fetch('todo.json')
.then(response => response.json())
.then(data => {

    tasks = data
    tasks.tasks.forEach(item => todoList.appendChild(ListItem(item)));
    
})

// Adding New Task
addBtn.addEventListener('click', function() {
    text = todoInput.value
    if (text != '') {
        todoList.appendChild(ListItem(text))
    }
});

