//if

const temperature = 41;

if (temperature < 50) {
  console.log("Less than 50 ");
} else {
  console.log("temperature greater than 50");
}

console.log("Exectued");

// < , >, <= ,>= ,==,!= , ===  Strict type check,!==

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`User power : ${power}`);
// }

//console.log(power);

const balance = 1000

// if(balance > 500) console.log("test"),console.log("test2");

// if(balance < 500){
//     console.log("less than 500");

// }else if(balance<900){
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged In");
}