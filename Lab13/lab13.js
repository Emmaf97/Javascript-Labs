// let itemsList = {
//     item1: "milk",
//     item2: "bread"
// };

const form = document.querySelector('form');
form.addEventListener('submit', function(event) { event.preventDefault();
const taskInput = document.querySelector
addTaskToList(task);
taskInput.value = '';
});

function addTaskToList(task) {
    const taskList = document.querySelector('#task-list');
    const taskItem = document.createElement('li');
    taskItem.classList.add('list-group-item');
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('click', function() {
    if (checkBox.checked) {
    taskItem.classList.add('completed');
    } else {
    taskItem.classList.remove('completed');
    }
    });
    taskItem.appendChild(checkBox);
    taskItem.appendChild(document.createTextNode(task.value));
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'float-right');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
    deleteTask(taskItem);
    });
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem)
}

function deleteTask(taskItem) {
    const taskList = document.querySelector('#task-list');
    taskList.removeChild(taskItem);
    }

    //Challenges
//1. Refactor the JavaScript code in the lab into smaller functions. The aim is to improve
//code organization, reusability, and maintainability. Each function should have a
//specific responsibility, making the code easier to read and understand.
//Refactor Version 1
const form = document.querySelector('form');
form.addEventListener('submit', function(event) { event.preventDefault();
const taskInput = document.querySelector
addTaskToList(task);
taskInput.value = '';
});

//refactor version 1
function addTaskToList(task) {
    const taskList = document.querySelector('#task-list');
    const taskItem = document.createElement('li');
    taskItem.classList.add('list-group-item');
    isChecked(task,taskItem);
    createDeleteButton(taskItem);
    taskList.appendChild(taskItem)
}
function isChecked(task, taskItem){
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('click', function() {
    if (checkBox.checked) {
    taskItem.classList.add('completed');
    } else {
    taskItem.classList.remove('completed');
    }
    });
    taskItem.appendChild(checkBox);
    taskItem.appendChild(document.createTextNode(task.value));
}
function createDeleteButton(taskItem){
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'float-right');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
    deleteTask(taskItem);
    });
    taskItem.appendChild(deleteButton);
}

function deleteTask(taskItem) {
    const taskList = document.querySelector('#task-list');
    taskList.removeChild(taskItem);
    }