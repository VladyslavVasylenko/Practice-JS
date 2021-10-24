const header = document.querySelector('.site-header');
const spider = document.querySelector('.spider');

function scarySound() {
  const audio = new Audio();
  audio.preload = 'auto';
  audio.src = '../sound/monstr.mp3';
  audio.play();
}

// spider.onclick = scarySound;

document.querySelector('.halloween-on').onchange = function() {
  if (this.checked){
    header.classList.add('site-header-bg');
    spider.classList.add('spider-animation');
    setTimeout(scarySound, 1000);
  } else {
    header.classList.remove('site-header-bg');
    spider.classList.remove('spider-animation');
  }
}