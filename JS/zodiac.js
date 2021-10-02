const zodiac = document.querySelector('.zodiac');
const formZod = document.querySelector('.zod');

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
  } else if( (month  == 1 && day >= 20 && day <= 31) || (month  == 2 && day <= 19) ) {
    zodiac.innerHTML = `
    <p>Zodiac: Aquarius.</p> 
    <p>Element: Air.</p> 
    <p>Planet-patron: Saturn.</p> 
    <p>Dates of birth and month: January 20 - February 19.</p>
    `;
  } else if( (month  == 2 && day >= 20 && day <= 31) || (month  == 3 && day <= 20) ) {
    zodiac.innerHTML = `
    <p>Zodiac: Fishes.</p> 
    <p>Element: Water.</p> 
    <p>Planet-patron: Jupiter.</p> 
    <p>Dates of birth and month: February 20 - March 20.</p>
    `;
  } else if( (month  == 3 && day >= 21 && day <= 31) || (month  == 4 && day <= 20) ) {
    zodiac.innerHTML = `
    <p>Zodiac: Aries.</p> 
    <p>Element: Fire.</p> 
    <p>Planet-patron: Mars.</p> 
    <p>Dates of birth and month: March 21 - April 20.</p>
    `;
  } else if( (month  == 4 && day >= 21 && day <= 31) || (month  == 5 && day <= 20) ) {
    zodiac.innerHTML = `
    <p>Zodiac: Taurus.</p> 
    <p>Element: Earth.</p> 
    <p>Planet-patron: Venus.</p> 
    <p>Dates of birth and month: April 21 - May 20.</p>
    `;
  } else if( (month  == 5 && day >= 21 && day <= 31) || (month  == 6 && day <= 21) ) {
    zodiac.innerHTML = `
    <p>Zodiac: Gemini.</p> 
    <p>Element: Air.</p> 
    <p>Planet-patron: Mercury.</p> 
    <p>Dates of birth and month: May 21 - June 21.</p>
    `;
  } else if( (month  == 6 && day >= 22 && day <= 31) || (month  == 7 && day <= 22) ) {
    zodiac.innerHTML = `
    <p>Zodiac: Cancer.</p> 
    <p>Element: Water.</p> 
    <p>Planet-patron: Moon.</p> 
    <p>Dates of birth and month: June 22 - July 22.</p>
    `;
  } else if( (month  == 7 && day >= 23 && day <= 31) || (month  == 8 && day <= 22) ) {
    zodiac.innerHTML = `
    <p>Zodiac: Leo.</p> 
    <p>Element: Fire.</p> 
    <p>Planet-patron: Sun.</p> 
    <p>Dates of birth and month: July 23 - August 22.</p>
    `;
  } else if( (month  == 8 && day >= 23 && day <= 31) || (month  == 9 && day <= 22) ) {
    zodiac.innerHTML = `
    <p>Zodiac: Virgo.</p> 
    <p>Element: Earth.</p> 
    <p>Planet-patron: Mercury.</p> 
    <p>Dates of birth and month: August 23 - September 22.</p>
    `;
  } else if( (month  == 9 && day >= 23 && day <= 31) || (month  == 10 && day <= 22) ) {
    zodiac.innerHTML = `
    <p>Zodiac: Libra.</p> 
    <p>Element: Air.</p> 
    <p>Planet-patron: Venus.</p> 
    <p>Dates of birth and month: September 23 - October 22.</p>
    `;
  } else if( (month  == 10 && day >= 23 && day <= 31) || (month  == 11 && day <= 21) ) {
    zodiac.innerHTML = `
    <p>Zodiac: Scorpio.</p> 
    <p>Element: Water.</p> 
    <p>Planet-patron: Mars.</p> 
    <p>Dates of birth and month: October 23 - November 21.</p>
    `;
  } else if( (month  == 11 && day >= 22 && day <= 31) || (month  == 12 && day <= 21) ) {
    zodiac.innerHTML = `
    <p>Zodiac: Sagittarius.</p> 
    <p>Element: Fire.</p> 
    <p>Planet-patron: Jupiter.</p> 
    <p>Dates of birth and month: November 22 - December 20.</p>
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
  formZod.reset();
}