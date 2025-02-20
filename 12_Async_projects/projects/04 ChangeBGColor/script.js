// Write code to change the background color of a <div> to a random color when it is clicked.

const body = document.querySelector("body");

const button = document.querySelectorAll('.button');
// console.log(button);
button.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'Yellow') {
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'Red') {
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'Pink') {
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'Green') {
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'Gray') {
      body.style.backgroundColor = e.target.id
    }
  })
})
