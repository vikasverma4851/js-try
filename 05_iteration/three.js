// for of

//["", "" ,""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
     //console.log(num);
}

const greeting = "Hello world!"
for (const greet of greeting) {
    if(greet == " "){
        continue;
    }else{
    //console.log(`Each char is ${greet}`);
}
}

// Maps

const map = new Map()
map.set('IN',"INdia")
map.set('USA',"United")
map.set('FR',"france")

//console.log(map);

for (const [key,value] of object) {
    //console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2':"Spiderman"
}

// for (const [key,value] of object) {
//     console.log(key, ':-', value);
    
// }

