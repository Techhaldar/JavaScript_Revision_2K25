// const sayDate = function (){
//     console.log('Ratin Haldar', Date.now())
// }

let intervalID; // Global variable interval ID ko store karne ke liye

function sayDate() {
    console.log('This side Ratin Haldar', Date.now());
}

function startDate() {
    stopDate(); // Pehle se chalta hua interval rok dete hain, agar koi hai toh
    intervalID = setInterval(sayDate, 1000); // Har 1 second me function chalayenge
}

function stopDate() {
    clearInterval(intervalID); // Interval ko stop kar dete hain
}




