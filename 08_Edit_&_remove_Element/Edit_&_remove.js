// function addLanguage (langName){
//     const li = document.createElement('li')
//     li.innerHTML = `${langName}`
//     document.querySelector(".language").appendChild(li)
// }

// addLanguage("C Language")

// function addLanguage(langName) {
//     const li = document.createElement('li')
//     // console.log(li)

//     li.innerHTML = `${langName}`
//     document.querySelector('.language').appendChild(li)
// }
// addLanguage("C Language")
// addLanguage("C#")

 function addOptiLanguage(langName) {
     const li = document.createElement('li');
     li.appendChild(document.createTextNode(langName))
     console.log(li)
     document.querySelector('.language').appendChild(li)
 }

 addOptiLanguage('golang')

// ********** Edit **********

const secondLang = document.querySelector("li:nth-child(1)")
console.log(secondLang)
const newli = document.createElement('li')
newli.innerText = "mojo"
secondLang.replaceWith(newli)

const firstLang = document.querySelector("li:nth-child(2")
firstLang.outerHTML = '<li>TypeScript</li>'


// ********** Edit **********

const lastLang = document.querySelector("li:last-Child")

lastLang.remove()