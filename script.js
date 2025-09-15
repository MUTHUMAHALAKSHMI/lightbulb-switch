let bulb = document.getElementById('bulb');
let switchBox = document.getElementById('switch');
let bulbContainer = document.querySelector('.bulb-container');
let body = document.body;
let switchSound = document.getElementById('switchSound');
let isOn = false;

switchBox.addEventListener('click', function () {
  // Play switch click sound
  switchSound.currentTime = 0; // reset sound before play
  switchSound.play();

  if (isOn) {
    // Turn OFF
    bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    bulbContainer.classList.remove('glow');
    body.classList.remove('light-mode');
    switchBox.classList.remove('on');
    isOn = false;
  } else {
    // Turn ON
    bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    bulbContainer.classList.add('glow');
    body.classList.add('light-mode');
    switchBox.classList.add('on');
    isOn = true;
  }
});





