"use strict";

const answer = [
  { HTML:"(HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).", },
  { CSS:"(/ siːɛsɛs / eng. Cascading style sheets 'cascading style sheets') is a formal language for describing the appearance of a document (web page) written using a markup language (most often HTML or XHTML). It can also be used on any XML document such as SVG or XUL.", },
  { JS:"is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. ", },
];

const btnClick = document.querySelector('.form__button');
let input = document.querySelector('.form__search');

btnClick.onclick = function(e) {
  e.preventDefault();
  if ( input.value == 'HTML' || input.value == 'html' ) {
    document.querySelector('.result').innerHTML = `<p class="text"><b>HTML</b> - ${answer[0].HTML}</p>`;
  } else if ( input.value == 'CSS' || input.value == 'css' ) {
    document.querySelector('.result').innerHTML = `<p class="text"><b>CSS</b> - ${answer[1].CSS}</p>`;
  } else if ( input.value == 'JS' || input.value == 'js' ) {
    document.querySelector('.result').innerHTML = `<p class="text"><b>JS</b> - ${answer[2].JS}</p>`;
  } else {
    document.querySelector('.result').innerHTML = '<p class="text">Sorry we don`t have information.</p>';
  }
  input.value = '';
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
    document.querySelector('#result').innerHTML = '<p class="text"><b>Enter the number.</b></p>';
  } else if ( userNumber2.value == '' ) {
    document.querySelector('#result').innerHTML = '<p class="text"><b>Enter the number.</b></p>';
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
    document.querySelector('#result').innerHTML = '<p class="text"><b>Enter the number.</b></p>';
  } else if ( userNumber4.value == '' ) {
    document.querySelector('#result').innerHTML = '<p class="text"><b>Enter the number.</b></p>';
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
    document.querySelector('#result').innerHTML = '<p class="text"><b>Enter the number.</b></p>';
  } else if ( userNumber6.value == '' ) {
    document.querySelector('#result').innerHTML = '<p class="text"><b>Enter the number.</b></p>';
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
    document.querySelector('#result').innerHTML = '<p class="text"><b>Enter the number.</b></p>';
  } else if ( userNumber8.value == '' ) {
    document.querySelector('#result').innerHTML = '<p class="text"><b>Enter the number.</b></p>';
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
    document.querySelector('#result').innerHTML = '<p class="text"><b>Enter the number.</b></p>';
  } else if ( userNumber10.value == '' ) {
    document.querySelector('#result').innerHTML = '<p class="text"><b>Enter the number.</b></p>';
  } else {
    result.innerHTML = '<p class="text">' + '<b>' + 'Your result: ' + '<br>' + userNumber9.value + '<i class="fas fa-percent size-icon"></i> from ' + userNumber10.value + ' <i class="fas fa-equals size-icon"></i> ' + division + '</b>' + '</p>';
  }
}

// user password validate
// user.password = '123456';
// console.log(user.validatePassword());

//  Promise - how work.
console.log('Request data...');

const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Preparing data...');

    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working',
    }
    resolve(backendData);
  }, 2000);
});

pr.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modifieds = true;
      resolve(data);
    }, 2000);
  });
})
  .then(clientData => {
    console.log('Data recived', clientData);
  })
  .catch(err => console.log('Error: ', err))
  .finally(() => console.log('Finally'));

let tr = {
  green: 'apple',
  red: 'tomato',
  yeallow: 'lemon',
  allFrute: function () {
    return this.green + ' ' + this.red + ' ' + this.yeallow;
  }
}

console.log(tr.allFrute());

const w = 'sertificate';
const out1 = document.querySelector('.out1');

document.querySelector('.r1').addEventListener('input',
function() {
  const num = +this.value;
  const n = num % 10;
  if(num === 0) {
    out1.textContent = '';
    return;
  }
  if(num >= 11 && num <= 20) {
    out1.textContent = `Get ${num} ${w}s`;
    return;
  }
  if(n === 1) {
    out1.textContent = `Get ${num} ${w}`;
    return;
  }
  if(n >= 2 && n <= 4) {
    out1.textContent = `Get ${num} ${w}a`;
    return;
  }
  if((n >= 5 && n <= 9) || n === 0) {
    out1.textContent = `Get ${num} ${w}of`;
    return;
  }
});