// Singleton
// Object.create

// object literals


const mySym = Symbol("key1")
const JsUser = {
    name: "Vikas",
    "full name": "Vikas Verma",
    [mySym]: "mykey1",
    age:22,
    location:"India",
    email:"vikas@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym]);

JsUser.email = "Akash@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "vikas@micorsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());