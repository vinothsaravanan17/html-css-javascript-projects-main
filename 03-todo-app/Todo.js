const taskInput = document.getElementById('taskInput');
const addbutton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


let tasks = JSON.parse(localStorage.getItem('tasks')) || []


function renderTasks() {
     taskList.innerHTML = '';

     tasks.forEach((task, index) => {
        const li = document.createElement('li');
        if (task.completed) {
            li.classList.add('completed')
        }
        
        const span = document.createElement('span')
        span.textContent = task.text;

     });
}