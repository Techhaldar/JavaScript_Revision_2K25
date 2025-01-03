const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval ${currval}`)
//     return acc + currval;
// }, 0)

// console.log(myTotal);
const shoppingCart = [
    {
        itemName : "Js Course",
        price : 2999
    },
    {
        itemName : "React Course",
        price : 3999
    },
    {
        itemName : "Java Course",
        price : 9999
    },
    {
        itemName : "Data Science Course",
        price : 12999
    },
    {
        itemName : "Python Course",
        price : 1999
    }
] 

const addCart = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(addCart)
