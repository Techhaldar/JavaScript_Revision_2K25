const div = document.createElement('div')
console.log(div)
console.log(div.innerText = 'ratin haldar')
div.style.backgroundColor = "green"
div.style.color = "#fff"
div.style.padding = '23px'
div.style.fontSize = '70px'
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)

div.setAttribute("name", "first_div")

document.body.appendChild(div)