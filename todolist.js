'use strict';

const todoBtn = document.querySelector('.todo-wrapper__button');
const todoInput = document.querySelector('.todo-wrapper__input');
const todoContent = document.querySelector('.todo-content');

let tasks;

localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

function Task(description) {
  this.description = description;
  this.completed = false;
}

const updateLocal = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const createTemplate = (task, index) => {
  return ` 
  <div class='todo-item' ${task.completed ? 'checked' : ''}> 
    <div class="descripton">${task.description}</div>
      <div class="todo-btn-block">
        <input class='btn-complete' type="checkbox" ${task.completed ? 'checked' : ''}>
        <button class='btn-delete'>Delete</button>
      </div>
    </div>
  `;
}

const fillHtmlList = () => {
  todoContent.innerHTML = '';
  if(tasks.length > 0) {
    tasks.forEach((item, index) => {
      todoContent.innerHTML += createTemplate(item, index);
    });
  }
}

fillHtmlList();

const copleteTask = (index) => {
  tasks[index].completed = !tasks[index].completed;
}

todoBtn.addEventListener('click', () => {
  tasks.push(new Task(todoInput.value));
  updateLocal();
  fillHtmlList();
});