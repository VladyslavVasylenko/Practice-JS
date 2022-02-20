'use strict';

const words = ['read', 'old', 'lover', 'fructs', 'me', 'i'];

let wordsMap = words.map((item) => {
  return {
    key: item,
    charCount: item.length,
  };
});

console.log(wordsMap);

let result = words.filter(word => word.length < 4);

console.log(result);