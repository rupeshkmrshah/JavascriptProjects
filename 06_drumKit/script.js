function removeTransition(e) {
    if (!e.target || !e.target.classList) return; // Add defensive checks
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

function playsound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    // console.log(audio, key);
    key.classList.add("playing");
    if(!audio)  return; // stop the function from running if there is no audio associated with the key pressed
    audio.currentTime = 0;  //resets the time of the sound to zero everytime a key is pressed down
    audio.play(); 
}

window.addEventListener('keydown', playsound);
window.addEventListener('keydown', removeTransition)
const keys = Array.from(document.querySelectorAll('.key'));
// console.log(keys);
keys.forEach(element => {
    element.addEventListener('transitionend',removeTransition);
});

/* <script>
 function removeTransition(e) {
  if (!e.target || !e.target.classList) return; // Add defensive checks
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}


  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    // console.log(audio, key);
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
</script> */