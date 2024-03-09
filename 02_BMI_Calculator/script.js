const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please Enter Valid Input ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please Enter Valid Input ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `${BMI}`;
    if (BMI < 18.6) {
      result.innerHTML = `Your BMI is :  ${BMI} <br> Your are under weight`;
    } else if (BMI <= 24.9) {
      result.innerHTML = `Your BMI is :  ${BMI} <br> Your are under Normal Range`;
    } else {
      result.innerHTML = `Your BMI is :  ${BMI} <br> You are Overweight`;
    }
  }
});
