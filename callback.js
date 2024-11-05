///////callback hell


// function sum(a,b){
//     console.log(a+b);
    
// }
// function calculator(a,b,sumCallback) {
//     sumCallback(a,b)
// }

// calculator(1,3,(a,b)=>{
//     console.log(a+b);
    
// })

//dataid will print after 2sec
function getdata(userid,nextdata){
    setTimeout(() => {
        console.log(userid);
        if (nextdata){
            nextdata()
        }
    },2000);
    
}
//this is callback hell
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4)
        })
    })
})