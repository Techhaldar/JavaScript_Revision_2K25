// ES6
// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abs`
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const tech = new User("chai", "chai@gmail.com", "123")

// console.log(tech.encryptPassword());
// console.log(tech.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abs`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase}`
}

const tea = new User("tea", "tech@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
console.log(tea.changeUsername());

