'use strict';

const todoBtn = document.querySelector('.todo-wrapper__button');
const todoInput = document.querySelector('.todo-wrapper__input');
const todoContent = document.querySelector('.todo-content');

let tasks;
let todoItemElems = [];

!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

function Task(description) {
  this.description = description;
  this.completed = false;
}

const createTemplate = (task, index) => {
  return ` 
  <div class="todo-item ${task.completed ? 'checked' : ''}"> 
    <div class="descripton">${task.description}</div>
      <div class="todo-btn-block">
        <input onclick="completeTask(${index})" class="btn-complete" type="checkbox" ${task.completed ? 'checked' : ''}>
        <button onclick="deleteTask(${index})" class="btn-delete">Delete</button>
      </div>
    </div>
  </div>
  `;
}

const filterTask = () => {
  const activeTasks = tasks.length && tasks.filter(item => item.completed == false);
  const completedTasks = tasks.length && tasks.filter(item => item.completed == true);
  tasks = [ ...activeTasks, ...completedTasks];
}

const fillHtmlList = () => {
  todoContent.innerHTML = '';
  if(tasks.length > 0) {
    filterTask();
    tasks.forEach((item, index) => {
      todoContent.innerHTML += createTemplate(item, index);
    });
    todoItemElems = document.querySelectorAll('.todo-item');
  }
}

fillHtmlList();

const updateLocal = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const completeTask = (index) => {
  tasks[index].completed = !tasks[index].completed;
  if(tasks[index].completed) {
    todoItemElems[index].classList.add('checked');
  } else{
    todoItemElems[index].classList.remove('checked');
  }
  updateLocal();
  fillHtmlList();
}

const deleteTask = (index) => {
  todoItemElems[index].classList.add('deletion');
  setTimeout(() => {
    tasks.splice(index, 1);
    updateLocal();
    fillHtmlList();
  }, 500)
}

todoBtn.addEventListener('click', () => {
  if(todoInput.value) {
    tasks.push(new Task(todoInput.value));
  }
  updateLocal();
  fillHtmlList();
  todoInput.value = '';
});