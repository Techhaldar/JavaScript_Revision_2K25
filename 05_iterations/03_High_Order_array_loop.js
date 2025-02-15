// const arr = ["india", "pakistan", "Nepal", "china", "Bangladesh", "Kshri Lanka"]
// for (const val of arr) {
// console.log(val)
// }

const myArr = ['Ram', 'Rahul', 'Raju', 'Amit']

for (const element of myArr) {
    console.log(element);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map)
//  for of loop
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

//  for in loop
for (const key in map) {
    console.log(key);

}