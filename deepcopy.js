const regularuser={
    email:"123@gmail.com",
    fullname:{
        userfullname:{
            firstname:"nikunj",
            lastname:"Jain"
        }
    }
}
function deepcopy(obj){
    if (typeof obj !== "object" || obj === null){
        return obj;
    }
    let copydeval = Array.isArray(obj)? [] : {} ;
    let keys = Object.keys(obj);
    for (let i=0;i<keys.length;i++){
        copydeval[keys[i]]=deepcopy(obj[keys[i]])
    }
    return copydeval
}
let copy= deepcopy(regularuser)
console.log(copy);
