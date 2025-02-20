const Counter = document.querySelector('#Counter')
let sum = 0;
document.querySelector('#button').addEventListener('click', () => {
  sum++;
  Counter.innerHTML = sum;
})
