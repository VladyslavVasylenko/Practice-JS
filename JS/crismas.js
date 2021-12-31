"use strict";

const img = document.querySelector('.img');

function secondImg() {
  img.src = "./images/NG/CHG.gif";
}

function firstImg() {
  img.src = "./images/NG/SNGB.gif";
}

setTimeout(secondImg, 10000);
setTimeout(firstImg, 20000);