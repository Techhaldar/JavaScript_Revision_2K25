// ****************** Date *******************

// let myDate = new Date();
// console.log(myDate) //  Sat Jul 27 2024 15:20:22 GMT+0530 (India Standard Time)

// console.log(myDate.toString())  // Sat Jul 27 2024 15:20:06 GMT+0530 (India Standard Time)

// console.log(myDate.toLocaleString())  // 7/27/2024, 3:20:00 PM

// let myCreateDate = new Date(2002, 3, 27);
// console.log(myCreateDate.getTime());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let myDate = new Date(1 ,5 , 2024);

// console.log(myDate);
// console.log(myDate.getDay())
// console.log(myDate.getMonth())
// console.log(myDate.getFullYear())
// console.log(myDate.getTime())

// console.log(myDate.getDay())

myDate.toLocaleDateString('default', {
    weekday: "long"

})

console.log(myDate.toLocaleDateString('default', {
    weekday: "long"
}))