const accountId = 144145
let accountEmail = "vikasverma4851@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;
//accountId = 2  // Not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bengluru"

console.log(accountId);

/*
Prefer not to use var  because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);