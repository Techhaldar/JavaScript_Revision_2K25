// document.getElementById('photoshop2').onclick = function () {
//     alert('clicked')
// }

// document.getElementById('photoshop5').addEventListener('click', function (e) {
//     alert('clicked')
// })

// document.getElementById('google').addEventListener('click', function (e) {
//     e.preventDefault()
//     console.log("google clicked");

// })

document.querySelector("#images").addEventListener('click', function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode
        removeIt.remove()
    }

}, false)