// Object literals
 const mySym = Symbol("key1")

 const JsUser = {
     name : "Ratin",
     "full name": "ratin haldar",

     age : 21,
     location : "Khatima",
     email : "ratinhaldar123@gmail.com",
     isLoggedIn: false,
     lastLoginDays: ["monday", "saturday"]
 };

 console.log(JsUser.email);
 console.log(JsUser["email"]);
 console.log(JsUser.name);
 console.log(JsUser["full name"]);
 console.log(JsUser);

 JsUser.email = "ratinhaldarofficial@.com";
 console.log(JsUser.email);
 Object.freeze(JsUser)
 JsUser.name = "raj"

 console.log(JsUser.name)

JsUser.greeting = function(){
    console.log("Hello JS User")
}
console.log(JsUser.greeting());




