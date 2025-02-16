function addLanguage(langName) {
    const li = document.createElement('li')
    li.innerHTML = `${langName}`
    document.querySelector(".language").appendChild(li)
}
addLanguage("C Language")

function addLanguage(langName) {
    const li = document.createElement('li')
    // console.log(li)

    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("C Language")
addLanguage("C#")

function addLanguage(langName) {
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("C")

function para(paraName) {
    const p = document.createElement('p');
    p.innerText = 'hi this is Ratin Haldar';
    document.querySelector('.language').appendChild(p)
}
para()


function addOptiLanguage(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName))
    console.log(li)
    document.querySelector('.language').appendChild(li)
}

addOptiLanguage('golang')

// ********** Edit **********

// const secondLang = document.querySelector("li:nth-child(1)")
// console.log(secondLang)
// const newli = document.createElement('li')
// newli.innerText = "mojo"
// secondLang.replaceWith(newli)

// const firstLang = document.querySelector("li:nth-child(2")
// firstLang.outerHTML = '<li>TypeScript</li>'


// ********** Edit **********

const lastLang = document.querySelector("li:last-Child")

lastLang.remove()

const secondLang = document.querySelector("li:nth-child(2)")
console.log(secondLang.innerHTML)
secondLang.innerHTML = "Ruby"

const newli = document.createElement('li');
newli.textContent = 'C#';
secondLang.replaceWith(newli);

const removeLang = document.querySelector("li:nth-child(3)")
console.log(removeLang.innerHTML);

removeLang.remove()
