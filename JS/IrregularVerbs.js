const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const button = document.querySelector('.form__btn');
const answer = document.querySelector('.answer');

button.addEventListener('click', function(e) {
  e.preventDefault();
  if (input.value == 'buy' || input.value == 'Buy') {
    answer.innerHTML = '<p>Buy, Bought - (second form PAST SIMPLE), Bought - (three form PAST SIMPLE) - покупать.</p>';
  } else {
    answer.innerHTML = '<p>It`s not irregular verbs</p>';
  }
  input.value = '';
});