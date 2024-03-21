// Immediately Invoked function Expression (IIFE)
 
//for overcoming global scope variable in function 
 
(function chai(){
    // Named IIFE
    console.log(`DB Connected`);
})();

((name)=>{
    console.log(`db connected two ${name}`);
})("Vikas");

