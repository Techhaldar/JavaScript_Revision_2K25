const div = document.createElement('div')
console.log(div)
console.log(div.innerText = 'ratin haldar')
div.style.backgroundColor = "green"
div.style.color = "#fff"
div.style.padding = '12px'
div.style.fontSize = '30px'
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)

div.setAttribute("name", "first_div")

document.body.appendChild(div)

const parent = document.querySelector('.parent')
console.log(parent);

console.log(parent.children);
console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}

parent.children[1].style.color = 'orange'
const anotherDiv = document.createElement('div')
console.log(anotherDiv.innerHTML = "This is ratin")
anotherDiv.style.backgroundColor = 'red'
anotherDiv.style.padding = '23px'
anotherDiv.style.marginTop = '12px'
document.body.appendChild(anotherDiv)