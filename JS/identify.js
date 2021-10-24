'use strict';

// const firstBlock = document.getElementById("first");
const secondBlock = document.getElementById("second");
const buttonShow = document.querySelector(".form-btn");
const identify = document.querySelector(".identify");
const form = document.querySelector(".form");
let result = [];


buttonShow.addEventListener('click', function(event) {
  event.preventDefault();
  const firstBlock = document.getElementById("first").value;
  // identify.innerHTML = `<p>${result}</p>`;
  result.push(firstBlock);
  result.sort();
  console.log(result);

  form.reset();
});

// Деструктурирующее присваивание
let salaries = {
  "John": 1000,
  "Pete": 3000,
  "Mary": 550
}

function topSalary(salaries) {
  let max = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if(max < salary) {
      max = salary;
      maxName = name;
    }
  }

  console.log(maxName);
  return maxName;
}

topSalary(salaries);