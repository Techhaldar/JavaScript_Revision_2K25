// setTimeout(function () {
//   // console.log("ratin");
// }, 2000);

// setInterval(function () {
//   console.log(`this is ratin haldar`);
// }, 4000)

// const sayRatin = function () {
//   // console.log("ratin")
// }

// const changeText = function () {
//   document.querySelector('h1').innerHTML = 'best Js series'
// }

// const stopChange = setTimeout(changeText, 2000)

// document.querySelector("#stop").addEventListener('click', function () {
//   clearTimeout(stopChange)
//   let stoped = document.createElement('h1')
//   stoped.innerHTML = "stoped";
//   document.body.appendChild(stoped);
// })


let intervalId;
document.querySelector('#start').addEventListener('click', function () {
  if (!intervalId) {
    intervalId = setInterval(function () {
      console.log("time started");
    }, 2000);
    console.log("Interval started");
  }
});

document.querySelector('#stop').addEventListener('click', function () {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null;
    console.log("Interval stoped");
  }
});


