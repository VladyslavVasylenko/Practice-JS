'use strict';

const words = ['read', 'old', 'lover', 'fructs', 'me'];

let wordsMap = words.map((item) => {
  return {
    key: item,
    charCount: item.length,
  };
});

console.log(wordsMap);