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