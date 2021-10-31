"use strict";

const img = document.querySelector('.img');
const cont = document.querySelector('.container');

function secondImg() {
  img.src = "./images/NG/CHG.gif";
}

function firstImg() {
  img.src = "./images/NG/SNGB.gif";
}

setTimeout(secondImg, 10000);
setTimeout(firstImg, 20000);