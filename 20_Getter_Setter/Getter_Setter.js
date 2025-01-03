class User {
    constructor (email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const ratin = new User("ratinhaldar@gmail.com", '12345')

console.log(ratin.email);
console.log(ratin.password);

