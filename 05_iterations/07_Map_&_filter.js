const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => {
//     return num + 10;
// })

// console.log(newNums)

// const newNums1 = myNumbers.forEach( (num) => {
//     return num + 10;
// });

// console.log(newNums1)

const newNumbers = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 70)
    // .map((num) => num + 10)
    .map((num) => num + 2)  
console.log(newNumbers);     
