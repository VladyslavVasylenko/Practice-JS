"use strict";

// let results = document.querySelector('#lucky');
// const users = [ 
//   "Oleg ", "age: 33", "Olga", 'age: 33',
// ];

// results.innerHTML = '<p class="text">' + 'Name ' +  users[0].userName + '<br>' + ' age: ' + users[1].age + '</p>';

// for ( let i of users ) {
//   results.innerHTML += '<p class="text">' + i + '</p>';
// }

// for (let i = 0; i < users.length; i++) {
//   results.innerHTML += '<p class="text">' + users[i] + '</p>';
// }

// const shopping = [ 'bread', 'milk', 'cheese', 'hummus', 'noodles',];

// console.log(shopping[0]);
// shopping[0] = 'tahini';
// console.log(shopping);

// const sequence = [ 1, 1, 2, 3, 5, 8, 13, ];
// let random = ['tree', 795, [ 0, 1, 2]];
// console.log(sequence.length);
// for (let i = 0; i < sequence.length; i++) {
//   console.log(sequence[i]);
// }

// let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

// let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];

// let myNewString = myArray.join(', ');
// console.log(myArray.toString());
// console.log(myArray);
// myArray.push('Cardiff');
// console.log(myArray);
// myArray.push('Bradford', 'Brighton');
// console.log(myArray);

// let newLength = myArray.push('Bristol');
// console.log(myArray);
// console.log(newLength);

// myArray.push('Bristolls');
// console.log(myArray);
// console.log(myArray.length);
// myArray.pop();
// console.log(myArray);
// console.log(myArray.length);
// let removedItem = myArray.pop();
// console.log(myArray);
// console.log(myArray.length);
// console.log(removedItem);
// console.log(myArray);
// console.log(myArray.length);
// myArray.unshift('Edinburgh');
// console.log(myArray);
// console.log(myArray.length);
// let first = myArray.shift();
// console.log(first);
// console.log(myArray);
// console.log(myArray.length);

// const list = document.querySelector('.output ul');
// const totalBox = document.querySelector('.output p');
// let total = 0;
// list.innerHTML = '';
// totalBox.textContent = '';

// const products = [
//   'Underpants:6.99',
//   'Socks:5.99',
//   'T-shirt:14.99',
//   'Trousers:31.99',
//   'Shoes:23.99',
// ];

// for( let i = 0; i < products.length; i++) {
//   let subArray = products[i].split(':');
//   let name = subArray[0];
//   let price = Number(subArray[1]);
//   total += price;
//   let itemText = name + ' -$' + price;

//   let listItem = document.createElement('li');
//   listItem.textContent = itemText;
//   list.appendChild(listItem);
// }

// totalBox.textContent = 'Total: $' + total.toFixed(2);

let list = document.querySelector('.output ul');
let searchInput = document.querySelector('.output input');
let searchBtn = document.querySelector('.output button');

list.innerHTML = '';

let myHistory= [];

searchBtn.onclick = function() {
  if( searchInput.value !== '' ) {
    myHistory.unshift( searchInput.value );

    list.innerHTML = '';

    for( let i = 0; i < myHistory.length; i++ ) {
      let itemText = myHistory[i];
      let listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    if(myHistory.length >= 5) {
      myHistory.pop();
    }

    searchInput.value = '';
    searchInput.focus();
  }
}

// addEventListener

// function modifyText() {
//   let table__item2 = document.getElementById('table__item2');
//   if (table__item2.firstChild.nodeValue == 'Three') {
//     table__item2.firstChild.nodeValue = 'Two';
//   } else {
//     table__item2.firstChild.nodeValue = 'Three';
//   }
// }

// function addClass() {
//   let addsClass = document.querySelector('.two');

//   if ( modifyText == 'two') {
//     addsClass.classList.toggle("two"); 
//   } else {
//     addsClass.classList.toggle("three"); 
//   }
// }

// let el = document.getElementById("table");
// el.addEventListener('click', modifyText, false);

// let elclass = document.getElementById("table");
// elclass.addEventListener('click', addClass, false);

// Object.prototype.constructor
// function Tree(name) {
//   this.name = name;
// }

// let theTree = new Tree('Red tree');
// console.log('theTree.constructor = ' + theTree);

// Rabbit
// function Rabbit(name) {
//   this.name = name;
//   console.log(name);
// }

// let rabbit = new Rabbit('White Rabbit');

// let rabbitSecond = new rabbit.constructor('Black Rabbit');

// console.log(rabbit);
// console.log(rabbitSecond);
// 
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// console.log( rabbit.eats );

// function Obj( userName, userAge, userPost, date, time ) {
//   this.userName = userName;
//   this.userAge = userAge;
//   this.userPost = userPost;
//   this.date = date;
//   this.time = time;
//   console.log( userName + ' ' + "my age: " + userAge + ' my message: ' + userPost + ' ' + date + ' ' + time );
// }

// let obj = new Obj("Vlad", 33, 'my work is it important', '20.08.2021', '10:09:36');

// let obj2 = Object.assign({}, obj);

// obj2.userName = 'Olga';
// // let obj2 = new obj.constructor();
// console.log(obj);

// let re = document.querySelector('#re');

// for (let key in obj2) {
//   re.innerHTML += '<p>' + obj2[key] + '</p>';
// }

//string sort
let b = ['mali', 'holli', 'dary', 'aba',];
console.log(b);
let sorted = b.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())); 
console.log(b);

// let all = Object.assign({} a, b);
// console.log(all);

// prototype
const person = new  Object({
  name: 'Maxsim',
  age: 25,
  greet: function() {
    console.log('Greet!');
  },
});

// Object.prototype.sayHello = function() {
//   console.log('Hello');
// };

// person.sayHello();
console.log(person);

// const lena = Object.create(person);
// lena.name = 'Elena';
// console.log(lena);

const str = new String('I`m string');
console.log(str);
console.log(str.length);
// str.sayHello();

function hello() {
  console.log('Hello', this);
};

const p = {
  name: 'Vlad',
  age: 33,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function(job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name} his age: ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
}

const lena = {
  name: 'Elena',
  age: 33,
}

p.sayHello();
p.sayHelloWindow();
p.logInfo();

p.logInfo.bind(lena, 'Developer', "0123654789")();
p.logInfo.call(lena, 'Developer', "0123654789");
p.logInfo.apply(lena, ['Developer', "0123654789"]);

const array = [1,2,3,4,5];

// function multBy(arr, n) {
//   return arr.map(function(i) {
//     return i * n;
//   });
// }

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
    return i * n;
  });
}

console.log(array.multBy(15));