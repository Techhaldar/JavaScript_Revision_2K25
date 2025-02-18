const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

// console.log(randomColor());


let intervalID;
function startChangingColor() {
    if (intervalID === null) {
        intervalID = setInterval(changeBgColor, 1000)
    }
    function changeBgColor() {
        document.querySelector('body').style.backgroundColor = randomColor()
    }
}
function stopChangingColor() {
    clearInterval(intervalID);
    intervalID = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)