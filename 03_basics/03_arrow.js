const user = {
    username : "Vikas",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`);   // this is holding current context of variable or current values
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
//Browser Global object is Window object

// function chai(){
//     let username = "Vikas"
//     console.log(this.username);  // not work
// }

// chai()

// const chai = () => {
//     let username = "Vikas"
//     console.log(this.username);  // not work
// }

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }  //explict return

// const addTwo = (num1,num2) => num1 + num2 //implicit return
//const addTwo = (num1,num2) => (num1 + num2) //implicit return
const addTwo = (num1,num2) => ({username: "Vikas"})


console.log(addTwo(3,5));

