//  Promise 1
 const promiseOne = new Promise(function(resolve, reject){
//  Do an async task
//  DB calls, cryptography, network
     setTimeout (function(){
         console.log('Async task is complete');
         resolve()
     }, 1000)
 })

 promiseOne.then(function(){
     console.log("Promise consumed");
 })

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task is complete 2')
        resolve()
    }, 2000)
})
promiseTwo.then(function(){
    console.log("Promise consumed 2");
    
})


// Promise 2
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function (){
//     console.log("Async 2 resolved");
// })

// Promise 3

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "techhaldar", email: "ratinhaldar123@gmail.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

// Promise 4

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ username: "ratin", password: "12345" })
//         } else {
//             reject("ERROR: Something went wrong");
//         }
//     }, 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function (error) {
//     console.log(error);
// })
// .finally(() => {
//     console.log("the promise is either resolved or rejected")
// })

// const promiseFive = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({ username: "JavaScript", password: "12345" })
//         } else {
//             reject("ERROR: Js went wrong");
//         }
//     }, 1000)
//     })

//     async function consumePromiseFive () {
//         const response = await promiseFive 
//         console.log(error); 
//     }
    
//     consumePromiseFive()

//     fetch('https://api.github.com/users/hiteshchoudhary')
//     .then((response) => {
//         return response.json()
//     })

//     .then((data) => {
//         console.log(data);
//     })

//     .catch((error) => console.log(error))

