const zodiac = document.querySelector('.zodiac');

document.querySelector('.zodiac__btn').onclick = (event) => {
  event.preventDefault();
  let day = document.querySelector('.zodiac__inp-day').value;
  let month = document.querySelector('.zodiac__inp-month').value;

  if( (month  == 12 && day >= 22 && day <= 31) || (month  == 1 && day <= 19) ) {
    zodiac.innerHTML = `
    <p>Zodiac: Capricorn.</p> 
    <p>Element: Earth.</p> 
    <p>Planet-patron: Saturn.</p> 
    <p>Dates of birth and month: December 21 - January 19.</p>
    `;
  } else if(month == '' && day == '') {
    zodiac.innerHTML = `<p>Write day and month!</p>`;
  } else if(day == '') {
    zodiac.innerHTML = `<p>Write day!</p>`;
  } else if(month == '') {
    zodiac.innerHTML = `<p>Write month!</p>`;
  } else {
    zodiac.innerHTML = `<p>Something wrong!</p>`;
  }
}

