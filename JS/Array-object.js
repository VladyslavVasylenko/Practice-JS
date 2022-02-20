'use strict';

// const words = ['read', 'old', 'lover', 'fructs', 'me', 'i'];

// let wordsMap = words.map((word) => {
//   return {
//     key: word,
//     charCount: word.length,
//   };
// });

// console.log(wordsMap);

// let result = words.filter(word => word.length < 4);

// console.log(result);

const userName = 'Vlad';
const userSurname = 'Vasylenko';

function person(name, sureName) {
  if(name !== '' || sureName !== '') {
    console.log(name + " " + sureName);
  } else{
    console.log(' ');
  }
}

person(userName, userSurname);
