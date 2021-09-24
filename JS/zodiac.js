const zodiac = document.querySelector('.zodiac');

document.querySelector('.zodiac__btn').onclick = () => {
  let day = document.querySelector('.zodiac__inp-day').value;
  let month = document.querySelector('.zodiac__inp-month').value;

  if( (month  == 12 && day >= 22) || (month  == 1 && day <= 19) ) {
    zodiac.innerHTML = `<p>Zodiac: Capricorn</p> <p>Element: Earth</p> <p>Planet-
    patron: Saturn</p> <p>Dates of birth and month: December 21 - January 19</p>`
  } else {
    zodiac.innerHTML = `<p>You have different Zodiac</p>`
  }
}