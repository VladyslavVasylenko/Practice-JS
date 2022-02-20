'use strict';

const arrs = ['read', 'old', 'lover', 'fructs', 'me'];

let ar = arrs.map((item) => {
  return item + ': ' + item.length;
});

let oo = {};
Object.assign(oo, arrs);

console.log(ar);
console.log(oo);