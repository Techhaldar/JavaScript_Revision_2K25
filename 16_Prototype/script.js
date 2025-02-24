//************ new keyword *************
function fullName() {
    console.log("hello")
}
console.log(fullName())
console.log(fullName.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}

//************ prototype *************
let myName = "ratin haldar    ";
console.log(myName.truelength)

let myHeros = ["thor", "spiderman", "hulk"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}