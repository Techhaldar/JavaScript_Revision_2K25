const form = document.querySelector('form')
// console.log(form)

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const Height = parseInt(document.querySelector('#Height').value)

  const Weight = parseInt(document.querySelector('#Weight').value)

  const results = document.querySelector('#results')

  if (Height === '' || Height < 0 || isNaN(Height)) {
    results.innerHTML = `Please give a valid height ${Height}`;
  } else if (Window === '' || Weight < 0 || isNaN(Weight)) {
    results.innerHTML = `Please give a valid Weight ${Weight}`;
  } else {
    const bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);
    // show the result

    if (bmi < 18.6) {
      results.innerHTML = `<span>Under Weight: ${bmi}</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>Normal Range: ${bmi}</span>`;
    }
    if (bmi > 24.9) {
      results.innerHTML = `<span>Greater than: ${bmi}</span>`;
    }

  }

})
