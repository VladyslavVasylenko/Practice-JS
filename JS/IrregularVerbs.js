const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const button = document.querySelector('.form__btn');
const answer = document.querySelector('.answer');

button.addEventListener('click', function(e) {
  e.preventDefault();
  
  if (input.value == 'buy' || input.value == 'Buy') {
    answer.innerHTML = '<p>Buy <br> Bought - (second form PAST SIMPLE) <br> Bought - (three form PAST SIMPLE) <br> перевод - покупать.</p>';
  } else if (input.value == 'beat' || input.value == 'Beat') {
    answer.innerHTML = '<p>Beat <br> Beat - (second form PAST SIMPLE) <br> Beaten - (three form PAST SIMPLE) <br> перевод - Бить.</p>';
  } else if (input.value == '') {
    answer.innerHTML = '<p>You didn`t write word.</p>';
  } else {
    answer.innerHTML = `<p>${input.value} - it's not irregular verbs!</p>`;
  }

  input.value = '';
});

// let url = 'ru-ua-com';

// function camelize(str) {
//   return str
//     .split('-')
//     .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('');
// }

// console.log(camelize(url));

// function filterRange(ar, a, b) {
//   return ar.filter(item => (a <= item && item <= b));
// }

// let arr = [5, 3, 8, 1];

// arr.sort();
// arr.reverse();

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered);
// console.log(arr);

const calendar = new Date();
let d = calendar.toLocaleDateString();
let c = calendar.toTimeString();

function time() {
  const calendar = new Date();
  let h = calendar.getHours();
  let m = calendar.getMinutes();
  let s = calendar.getSeconds();

  if (s < 10 || s == 0) s = "0" + s;

  if (m < 10 || m == 0) m = "0" +  m;

  if (h < 10 || h == 0) h = "0" +  h;
  
  document.querySelector('.time').innerHTML = ('<p class="time">' + d + '<br>' + h + ' : ' + m + ' : ' + s + '</p>');

  setInterval(time, 1000);
};

time();