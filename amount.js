'use strict';

const formDocs = document.querySelector('.form-docs');
const spendFuel = document.querySelector('#spend');
const wayKm = document.querySelector('#away');
const amount =  document.querySelector('#total');
const sumLitre = document.querySelector('#sum')

formDocs.addEventListener('submit', function (e) {
  e.preventDefault();
  let mult = (wayKm.value / 100) * spendFuel.value;
  let sums = mult * sumLitre.value;
  let sumsFloor =  sums.toFixed(2);
  if(spendFuel.value) {
    amount.innerHTML = `<p class="text">Quantity fuel for ${wayKm.value} km. = ${mult} liters.</p>` +
    `<p class="text">Sum for ${mult} lt. = ${sumsFloor} hryvnia</p>`;
    formDocs.reset();
  }
});