//for

// for (let index = 0; index <10; index++) {
//     const element = index;
//     if(element == 5){
//         console.log("is the best number");
//     }
//     console.log(element);
    
// }


// for (let i = 0; i <=10; i++) {
//      console.log(`"Outer loop value:"${i}`);
//      for(let j = 0 ; j<=10; j++){
//         console.log(`inner loop ${j} out loop ${i}`);
//      }
// }

let array = ["flass", "batman", "superman"]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
   // console.log(element);
}


// break and continue 

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}