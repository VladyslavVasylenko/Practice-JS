'use strict';

const inputTDL = document.querySelector('.todo-form__input');
const btnTDL = document.querySelector('.todo-form__btn');
const todoTask = document.querySelector('.todo__task');

let tasks;
let todoItemElem = [];

!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

function Task(description) {
  this.description = description;
  this.completed = false;
}

function createContant(task, index) {
  return ` 
  <div class='todo-item' ${task.completed ? 'checked' : ''}> 
    <div class="descripton">${task.description}</div>
      <div class="todo-btn-block">
        <input class='btn-complete' onclick='completeTask(${index})' type="checkbox" ${task.completed ? 'checked' : ''}>
        <button class='btn-delete' onclick='deleteTask(${index})'>Delete</button>
      </div>
    </div>
  </div>
  `;
}

function filterTask() {
  const activeTasks = tasks.length && tasks.filter(item => item.completed == false);
  const completedTasks = tasks.length && tasks.filter(item => item.completed == true);
  tasks = [ ...activeTasks, ...completedTasks];
}

function fillHtmlList() {
  todoTask.innerHTML = '';
  if(tasks.length > 0) {
    filterTask();
    tasks.forEach((item, index) => {
      todoTask.innerHTML += createContant(item, index);
    });
    todoItemElem = document.querySelectorAll('.todo-item');
  }
}

fillHtmlList();

function updateLocal() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function completeTask(index) {
  tasks[index].completed = !tasks[index].completed;
  if(tasks[index].completed) {
    todoItemElem[index].classList.add('checkeds');
  } else{
    todoItemElem[index].classList.remove('checkeds');
  }
  updateLocal();
  fillHtmlList();
}

function deleteTask(index) {
  todoItemElem[index].classList.add('deletion');
  setTimeout(() => {
    tasks.splice(index, 1);
    updateLocal();
    fillHtmlList();
  }, 500)
}

btnTDL.addEventListener('click', () => {
  if(inputTDL.value) {
    tasks.push(new Task(inputTDL.value));
  }
  updateLocal();
  fillHtmlList();
  inputTDL.value = '';
});