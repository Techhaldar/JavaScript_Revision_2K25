// 04_for_each_loops
const coding = ["js", "ruby", "java", "python", "cpp"]

for (const element of coding) {
    // console.log(element);
}

const greetings = 'Hello Ratin';
for (const element of greetings) {
    // console.log(element)
}

// coding.forEach( function (val){
//     console.log(val)
// })

// coding.forEach((item) => {
//     console.log(item)
// })

// coding.forEach((item, index, Arr) => {
//     console.log(item, index, Arr)
// })

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "Js"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    // console.log(item.languageName)
    // console.log(item.languageFileName)
})