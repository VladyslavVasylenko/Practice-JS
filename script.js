"use strict"

const answer = [
  { HTML:"(от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.", },
  { CSS:"(/siːɛsɛs/ англ. Cascading Style Sheets «каскадные таблицы стилей») — формальный язык описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML). Также может применяться к любым XML-документам, например, к SVG или XUL.", },
  { JS:"Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript (стандарт ECMA-262.7).", },
];

const btnClick = document.querySelector('.form__button');
let input = document.querySelector('.form__search');

btnClick.onclick = function(e) {
  e.preventDefault();
  if ( input.value == 'HTML' ) {
    document.querySelector('.result').innerHTML = `<p class="text"><b>HTML</b> - ${answer[0].HTML}</p>`;
  } else if ( input.value == 'CSS' ) {
    document.querySelector('.result').innerHTML = `<p class="text"><b>CSS</b> - ${answer[1].CSS}</p>`;
  } else if ( input.value == 'JS' ) {
    document.querySelector('.result').innerHTML = `<p class="text"><b>JS</b> - ${answer[2].JS}</p>`;
  } else {
    document.querySelector('.result').innerHTML = '<p class="text">Sorry we don`t have information</p>';
  }
}


// Calculator
// Multiplication
const userNumber1 = document.querySelector('#input1');
const userNumber2 = document.querySelector('#input2');
const btnClick2 = document.querySelector('#btn');
const result = document.querySelector('#result');

btnClick2.onclick = function(e) {
  e.preventDefault();

  let multiplic = Number(userNumber1.value) * Number(userNumber2.value);

  if ( userNumber1.value == "" ) {
    document.querySelector('#result').innerHTML = '<p class="text"><b>Send number</b></p>';
  } else {
    result.innerHTML = '<p class="text">' + '<b>' + 'Your result: ' + '<br>' + userNumber1.value + ' <i class="fas fa-times size-icon"></i> ' + userNumber2.value + ' <i class="fas fa-equals size-icon"></i> ' + multiplic + '</b>' + '</p>';
  }
}

// Plus
const userNumber3 = document.querySelector('#input3');
const userNumber4 = document.querySelector('#input4');
const btnClick3 = document.querySelector('#btn1');

btnClick3.onclick = function(e) {
  e.preventDefault();

  let plus = Number(userNumber3.value) + Number(userNumber4.value);

  if ( userNumber3.value == '') {
    document.querySelector('#result').innerHTML = '<p class="text"><b>Send number</b></p>';
  } else {
    result.innerHTML = '<p class="text">' + '<b>' + 'Your result: ' + '<br>' + userNumber3.value + ' <i class="fas fa-plus size-icon"></i> ' + userNumber4.value + ' <i class="fas fa-equals size-icon"></i> ' + plus + '</b>' + '</p>';
  }
}

// Minus
const userNumber5 = document.querySelector('#input5');
const userNumber6 = document.querySelector('#input6');
const btnClick4 = document.querySelector('#btn2');

btnClick4.onclick = function(e) {
  e.preventDefault();

  let minus = Number(userNumber5.value) - Number(userNumber6.value);

  if ( userNumber5.value == '') {
    document.querySelector('#result').innerHTML = '<p class="text"><b>Send number</b></p>';
  } else {
    result.innerHTML = '<p class="text">' + '<b>' +  'Your result: ' + '<br>' + userNumber5.value + ' <i class="fas fa-minus size-icon"></i> ' + userNumber6.value + ' <i class="fas fa-equals size-icon"></i> ' + minus + '</b>' + '</p>';
  }
}

// Division
const userNumber7 = document.querySelector('#input7');
const userNumber8 = document.querySelector('#input8');
const btnClick5 = document.querySelector('#btn3');

btnClick5.onclick = function(e) {
  e.preventDefault();

  let division = Number(userNumber7.value) / Number(userNumber8.value);

  if ( userNumber7.value == '' ) {
    document.querySelector('#result').innerHTML = '<p class="text"><b>Send number</b></p>';
  } else {
    result.innerHTML = '<p class="text">' + '<b>' + 'Your result: ' + '<br>' + userNumber7.value + ' <i class="fas fa-divide size-icon"></i> ' + userNumber8.value + ' <i class="fas fa-equals size-icon"></i> ' + division + '</b>' + '</p>';
  }
}

// Percent

const userNumber9 = document.querySelector('#input9');
const userNumber10 = document.querySelector('#input10');
const btnClick6 = document.querySelector('#btn4');

btnClick6.onclick = function(e) {
  e.preventDefault();
  let division = Number(userNumber9.value) / 100 * Number(userNumber10.value);

  if ( userNumber9.value == '' ) {
    document.querySelector('#result').innerHTML = '<p class="text"><b>Send number</b></p>';
  } else {
    result.innerHTML = '<p class="text">' + '<b>' + 'Your result: ' + '<br>' + userNumber9.value + '<i class="fas fa-percent size-icon"></i> from ' + userNumber10.value + ' <i class="fas fa-equals size-icon"></i> ' + division + '</b>' + '</p>';
  }
}