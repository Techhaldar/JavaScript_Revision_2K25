let val1 = parseInt(prompt(`enter value 1:`));
let val2 = parseInt(prompt(`enter value 2:`));

function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2)
alert(result1);

let result2 = addNum(10, 20);
alert(result2)