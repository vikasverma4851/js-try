const name ="vikas"
const repoCount = 50

//console.log(name + repoCount +"Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('vikas-verma')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,-2)

console.log(anotherString);

const newStringOne = "   Vikas    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vikas.com/vikas%20verma"

console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));