'use strict';

const firstBlock = document.getElementById("first");
const buttonShow = document.querySelector(".form-btn");
const identify = document.querySelector(".identify");
const form = document.querySelector(".form");
let arr = [];

buttonShow.addEventListener('click', function(event) {
  event.preventDefault();

  if(firstBlock.value == '') {
    identify.innerHTML = `<p>Write something!</p>`;
  } else {
    arr.push(firstBlock.value);
    // result.push(firstBlock.value);
    // result.sort();
    console.log(arr);
    let result = arr.filter( (item, index) => {
      return arr.indexOf(item) !== index;
    });
    identify.innerHTML = `<p>${result}</p>`;
    console.log(result);
  }

  form.reset();
});

// how meny identify
// for (let len = result.length, i = len; --i >= 0;) {
//   if (result[result[i]]) {
//     result[result[i]] += 1;
//     result.splice(i, 1);
//   } else {
//     result[result[i]] = 1;
//   }
// }

// Деструктурирующее присваивание
// let salaries = {
//   "John": 1000,
//   "Pete": 3000,
//   "Mary": 550
// }

// function topSalary(salaries) {
//   let max = 0;
//   let maxName = null;

//   for(const [name, salary] of Object.entries(salaries)) {
//     if(max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }

//   console.log(maxName);
//   return maxName;
// }

// topSalary(salaries);