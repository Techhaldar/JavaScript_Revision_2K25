const fName = document.getElementById('name');
const age = document.querySelector('#age')

fName.addEventListener('keypress', (e) => {
  console.log(`Key pressed : ${e.key}`);

})
