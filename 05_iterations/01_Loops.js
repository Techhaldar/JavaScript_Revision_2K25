// for loop
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(i == 5){
//         console.log("5 is best number");        
//     }
//     console.log(element)
// }

// for(let i = 1; i<=5; i++){
//     let stars = ''
//     for(let j = 1; j<=i; j++){
//         stars = stars + '* ';

//     }

//     console.log(stars);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// let myArray = ["ratin", "raju", "rahul", "abhay", "superman"]

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("5 is Detected");
        break
    }
    console.log(`Value of i is ${i}`);
}
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("5 is Detected");
        continue
    }
    console.log(`Value of i is ${i}`);
}