//Primitive

// 7 types : String,Number,Boolean, null ,undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 43243547657868998n



//Reference  (Non-primitive)

//Array , Objects ,Functions 

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name:"vikas",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof heros);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non-primitive)

let myname ="vikas"
let anothername = myname
anothername = "Akash"

console.log(myname);
console.log(anothername);

let userOne = {
    email: "user@vikas.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "vikas@google.com"

console.log(userOne.email);
console.log(userTwo.email);