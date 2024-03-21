
function sayMyName(){
    console.log("v");
    console.log("i");
    console.log("k");
    console.log("a");
    console.log("s");
}

//sayMyName()   //Reference or Execution

function addTwoNumbers(number1, number2){
    //  console.log(number1+number2);
    // let result = number1 + number2
    // return result
    return number1 + number2

}

// const result = addTwoNumbers(10,3)

// console.log("Result:",result);

function loginUserMessage(username = "Abhay"){
    if(username === undefined){      //!username
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vikas"))
// console.log(loginUserMessage())


// ... Spread operator or ... Rest operator

//Rest in parameters
function calculateCartPrice(val1 ,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200,654,132,48));

const user = {
    username: "Vikas",
    price : 999
} 

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is${anyObject.price}`);
}

//handleObject(user)
handleObject({
    username : "Akash",
    price : 1000
})

const myNewArray = [200, 345, 342, 354]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([234,456,,567,32]));