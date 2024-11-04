//Immediately Invoked function expression(iife)
//use to avoid the pollution of global scope by using () () ;
(function name(params) {
    //named iife
    console.log("hi");
    
})(); //; is important to use 
( () => {
    //unamaed iife
    console.log(`popeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`);
    
} )();
( (name) => {
    console.log(`p ${name}opeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`);
    
} )("nikunj");