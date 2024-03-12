//Generate a random color using hex

const randomColor = function () {
    const hex = '0123456789ABCDEF'; //Hex range
    let color = '#'; //starts with #
    for (let i = 0; i < 6; i++) {
      color = color + hex[Math.floor(Math.random() * 16)]; //to generate random 6 digit HEX number
      // color += hex[Math.floor(Math.random() * 16)]; //another way to declare
    }
    return color;
  };
  let intervalId;
  document.querySelector('#start').addEventListener('click', function () {
    if (!intervalId) {
      /** it will check if no interval*/ intervalId = setInterval(function () {
        document.body.style.backgroundColor = randomColor();
      }, 1000);
    }
  });
  
  document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = null; //interval set to null after clearInterval
  });
  