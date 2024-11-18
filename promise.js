//console.log("hello")
// const promiseone= new Promise(function (resolve,reject) {
//     setTimeout(() => {
//         console.log("promise completed");
//         resolve()
//     },1000);
    
// })
// promiseone.then(function () {
//     console.log("execution sucess");
    
// })

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("async2");
//         resolve()
//     },1000);
// }).then(function(){
//     console.log("async2 resolved");
    
// })
const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"nikunj",email:"nikunj@gmail.com"})
    },1000)
})
promisefour.then(function(user){
    console.log(user);
    
})