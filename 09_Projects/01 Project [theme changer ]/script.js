const button = document.querySelectorAll('.button');
console.log(button)
const nav = document.querySelector('nav');
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h2 = document.querySelectorAll("h2");
console.log(h1)

button.forEach(function (button) {
    button.addEventListener('click', function (e) {
        switch (e.target) {
            case Gray:
                body.style.backgroundColor = e.target.id;
                h1.style.color = white;
                break;
            case green:
                body.style.backgroundColor = e.target.id

                break;
            case blue:
                body.style.backgroundColor = e.target.id

                break;
            case yellow:
                body.style.backgroundColor = e.target.id
        }
    });
});