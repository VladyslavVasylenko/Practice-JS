'use strict';
// Practice
/*
Primitive data types:
Number (all number);
String ('',"",``);
Boolean (true / false);
Null (Null);
Undefined (undefined);
Symbol (exclusive indicators);
BigInt;

Not primitive data type:
Object (mutable data type);
*/

// let userName = 'Vlad';

// if( userName === 'Vlad' || catRudy.age >= 40) {
//   console.log('Yes');
// } else if (userName === 'Olga' ||  catRudy.age >= 4) {
//   console.log("YES");
// } else {
//   console.log('No');
// }

// const products = [
//   'Underpants: 6.99',
//   'Socks: 5.99',
//   'T-shirt: 14.99',
//   'Trousers: 31.99',
//   'Shoes: 23.99',
// ];

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
// }

// let i = 0;
// while (i < products.length) {
//   console.log(products[i]);
//   i++;
// }

// Async/Await //
// const fetchData = () => Promise.resolve({
//   data: ['Vlad', 'Max', 'Olga']
// });

// const getNamesData = async () => {
//   console.log(await fetchData());
//   return 'done';
// }

// getNamesData();

// console.log(getNamesData());

// async function f1() {
//   const res = await fetch('test.php?d=1')
//   return res.text();
// }

// async function f2() {
//   const res = await fetch('php?d=2')
//   return res.text();
// }

// async function f3() {
//   const res = await fetch('php?d=3')
//   return res.text();
// }

// async function go() {
//   let a = await f1();
//   console.log(a);
//   let b = await f2();
//   console.log(b);
//   let c = await f3();
//   console.log(c);
// }

// go();

// const delay = (ms) => {
//   return new Promise(r => setTimeout(() => r(), ms));
// }

// const url = 'https://jsonplaceholder.typicode.com/todos';

// async function fetchAsyncTodos() {
//   console.log('Started fetch');
//   try {
//     await delay(2000);
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log('Data', data);
//   } catch (e) {
//     console.error(e);
//   }
// }

// fetchAsyncTodos();

const images = {
  "JD-03-128" : {
      "name": 'Чудовище Франкенштейна',
      "movie" : '1910 Франкенштейн',
      "universe" : '',
  },
  "JD-05-128": {
      "name": 'Миньон',
      "movie": 'Гадкий Я',
      "universe": '',
  },
  "JD-07-128": {
      "name": 'Миньон',
      "movie": 'Гадкий Я',
      "universe": '',
  },
  "JD-11-128": {
      "name": 'Сорвиголова',
      "movie": 'Сорвиголова сериал',
      "universe": 'Marvel',
  },
  "JD-12-128": {
      "name": 'Магнето',
      "movie": 'Люди Икс',
      "universe": 'Марвел',
  },
  "JD-13-128": {
      "name": 'Человек-муравей',
      "movie": 'Первый мститель: Противостояние',
      "universe": 'Марвел',
  },
  "JD-15-128": {
      "name": 'Дедпул',
      "movie": 'Люди Икс',
      "universe": 'Люди Икс',
  }
}

const imageOut = document.querySelector('.image-out');
const heroName = document.querySelector('.hero-name');
const heroMovie = document.querySelector('.hero-movie');
const heroUniv = document.querySelector('.hero-univ');

for( let key in images ) {
  let img = document.createElement('img');
  img.setAttribute('data-key', key);
  img.src = 'images/' + key + '.png';
  img.classList.add('img');
  imageOut.append(img);
}

imageOut.addEventListener('click', showInfo);

function showInfo(event) {
  const key = event.target.dataset['key'];
  if(key === undefined){
    return true;
  }
  heroName.textContent = images[key]['name'];
  heroMovie.textContent = images[key]['movie'];
  heroUniv.textContent = images[key]['univ'];

  document.querySelectorAll('.image-out img').forEach((item) => {
    item.classList.remove('active')
  });

  event.target.classList.add('active');
}
