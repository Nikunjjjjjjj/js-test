const promiseone=() =>{
    return new Promise(function(resolve,reject){
        console.log("i am apromise");
        resolve("success")
})
}
let promise =promiseone();
promise.then((res)=>{
    console.log("resolved",res);
    
})
//for reject
const promisetwo=() =>{
    return new Promise(function(resolve,reject){
        console.log("i am a promise");
        reject("error")
})
}
let promise2 =promisetwo();
promise2.catch((res)=>{
    console.log("failed",res);
    
})

////////////nested promise

function getdata(userid){
    return new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log(userid);
        resolve("success")
    },2000);
        
})}


getdata(1).then((res) =>{
    //console.log(res);
    return getdata(2)
}).then((res) =>{
    return getdata(3)
}).then((res) =>{
    return getdata(4)
})