//const tinderuser= new Object()    singletone object
//non singleton
const tinderuser={ }

// console.log(tinderuser);
tinderuser.name="tuktuk"
tinderuser.id=1909
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(tinderuser.hasOwnProperty('id'));


const regularuser={
    email:"123@gmail.com",
    fullname:{
        userfullname:{
            firstname:"nikunj",
            lastname:"Jain"
        }
    }
}
// console.log(regularuser);
// console.log(regularuser.fullname.userfullname);


//json or api
//destructuring
// regularuser.email
// const {email}=regularuser
// console.log(email);
const {email:e}=regularuser
console.log(e);


const obj1 ={ a:1,b:2}
const obj2={c:3,d:4}
const obj3={...obj1,...obj2} //we can use .assign also
console.log(obj3);
