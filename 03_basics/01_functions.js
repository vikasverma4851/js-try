
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
