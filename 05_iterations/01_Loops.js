// for loop
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(i == 5){
//         console.log("5 is best number");        
//     }
//     console.log(element)
// }

for(let i = 1; i<=5; i++){
    let stars = ''
    for(let j = 1; j<=i; j++){
        stars = stars + '* ';

    }
    
    console.log(stars);
}

