

function getdata(userid){
    console.log("abc");
    
    return new Promise(function(resolve,reject){
        
        
        
        setTimeout(() => {
            console.log(userid);
            resolve("success");
        },2000);
        
    });
   
    
};
async function getAlldata(){
    
    
    await getdata(1);
    console.log("getting2");
    await getdata(2);
};
//getAlldata()

///////this is iife (),it is one time
(async function (){
    
    
    await getdata(1);
    console.log("getting2");
    await getdata(2);
})();