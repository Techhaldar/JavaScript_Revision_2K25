// **************** Number ****************
// const num = 300.90654;
// console.log(`${typeof(num)} ${num}`);

// const balance = new Number(100.98165);
// console.log(balance.toFixed(2))
// console.log(balance.toString())

// const rupees = 1000.9078;
// console.log(rupees.toPrecision(4));

// console.log(rupees.toLocaleString("en-IN"));

// console.log(rupees.toPrecision(8));

// **************** Maths ****************
// const num = -4;
// console.log(Math)

// console.log(Math.abs(num));
// console.log(Math.round(5.2))
// console.log(Math.ceil(5.1));

// let dice = Math.round(Math.random() * 10 + 1);
// console.log(dice);
// if (dice <= 6) {
//   console.log(dice)
// } else if(dice > 6) {
//   console.log(dice - 4)
// }


// console.log(sq)
// console.log(Math.sqrt(sq));
// console.log(Math.pow(sq,2))

// const RandomNum = Math.random();
// console.log(RandomNum);
// const min = 1;
// const max = 6;
// console.log((RandomNum*10).toFixed()) + min;

// const randomNum = Math.floor(Math.random() * 10 + 1);
// console.log(randomNum);

const min = 1;
const max = 6;

const dice = Math.floor(Math.random() * (max - min + 1) + min );
console.log(dice);
