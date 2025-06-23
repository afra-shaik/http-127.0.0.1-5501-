const envelope = document.querySelector('.envelope');
const flap = document.querySelector('.flap');
const letter = document.querySelector('.letter');
const music = document.getElementById('bg-music');

envelope.addEventListener('click', () => {
  flap.style.transform = 'rotateX(180deg)';
  letter.style.opacity = 1;
  music.play();
});
