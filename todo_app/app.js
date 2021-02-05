const todoInput = document.querySelector('#todoItem');
const todoList = document.querySelector('#todoList');
const addBtn = document.querySelector('#addBtn');

let tasks = null

// ListItem Component
const ListItem = (item) => {
    const li = document.createElement('LI');
    const text = document.createTextNode(item);
    const icon = document.createElement('I');
    icon.classList.add('fas', 'fa-trash')
    li.appendChild(text);
    li.appendChild(icon)
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'px-5');
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
        tasks.tasks.push(text);
    }
    todoInput.value = ""
});

document.addEventListener('click', function(e){
    if(e.target.classList.contains('fa-trash')) {
        e.target.parentElement.remove()
    }

    if (e.target.classList.contains('list-group-item')) {
        lineThrough = 'text-decoration-line-through'

        if(e.target.classList.contains(lineThrough))
        {
            e.target.classList.remove(lineThrough)
        } else {
            e.target.classList.add(lineThrough)
        }
        
    }
})

