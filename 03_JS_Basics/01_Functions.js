function Hello() {
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("o");
}

Hello();

function sayMyName() {
    console.log("Ratin");
}

sayMyName()
sayMyName()
sayMyName()

function addTwoNumbers(number1, number2) {
    let sum = number1 - number2;
    return sum;
    console.log(sum)
}

function addNumber(number1, number2) {
    let sum = number1 + number2;
    return sum;
}
const result = addNumber(4, 6)
console.log("Result:", result);


const result1 = addTwoNumbers(4, 5);
console.log("Result: ", result1);
addTwoNumbers(5, 4)

function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter username");
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())

function calculateCartPrice(val1, vla2, val3, ...num) {
    return num;
}
console.log(calculateCartPrice(200, 500, 300, 100, 900))

function calculateCartPrice(...num) {
    return num;
}
const price = calculateCartPrice(4, 5, 6);
let sum = 0;
for (let i = 0; i < price.length; i++) {
    sum += price[i]
}

console.log(sum);

const user = {
    username: "ratin",
    price: 199
}
function handlObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
console.log(handlObject(user));

const user = {
    name: "ratin",
    email: "ratinhaldar123@gmail.com"
}

function userLogedIn(anyobject) {
    console.log(`Name is ${anyobject.name} and email Id is ${anyobject.email}`)
}

console.log(userLogedIn(user));


handlObject({
    username: "ratin haldar",
    price: 599
})

const myNewArray = [200, 400, 600, 800]
function returnSecondValue(getArray) {
    return getArray[2]
}
console.log(returnSecondValue(myNewArray))