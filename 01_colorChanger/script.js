const changeButton = document.querySelectorAll('.button');
const selectBody = document.querySelector('body');
changeButton.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    // selectBody.style.backgroundColor = button.id;
    if (e.target.id === 'grey') {
      selectBody.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      selectBody.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      selectBody.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      selectBody.style.backgroundColor = e.target.id;
    }
  });
});

/** with switch case
const changeButton = document.querySelectorAll('.button');
const selectBody = document.querySelector('body');
changeButton.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', (e) => {
    // selectBody.style.backgroundColor = button.id;
    const color = button.id;
    switch (color) {
      case 'grey':
        selectBody.style.backgroundColor = color;
        break;
      case 'white':
        selectBody.style.backgroundColor = color;
        break;
      case 'blue':
        selectBody.style.backgroundColor = color;
        break;
      case 'yellow':
        selectBody.style.backgroundColor = color;
        break;
      default:
        selectBody.style.backgroundColor = 'white';
    }
  });
});
 */