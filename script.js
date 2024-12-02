const taskList = document.getElementById('taskList');

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <span>
            <button class="btn-complete" onclick="completeTask(this)">✔</button>
            <button class="btn-delete" onclick="deleteTask(this)">❌</button>
        </span>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function completeTask(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('completed');
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    taskList.removeChild(li);
}
const taskList = document.getElementById('taskList');

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <span>
            <button class="btn-complete" onclick="completeTask(this)">✔</button>
            <button class="btn-delete" onclick="deleteTask(this)">❌</button>
        </span>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function completeTask(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('completed');
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    taskList.removeChild(li);
}