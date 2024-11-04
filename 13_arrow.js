//********************this************
//this will work only inside function scope of objet
// const obj={
//     name:"nikunj",
//     age:21,
//     wellcomemsg:function () {
        
//     return `${this.name} welcome back`
// }
// }
// store=obj.wellcomemsg()
// console.log(store);

const obj={
    name:"nikunj",
    age:21,
    wellcomemsg:function () {
        
    console.log(`${this.name} welcome back`);
     
}
}
//obj.wellcomemsg()
obj.name="niku"
//obj.wellcomemsg()
//console.log(this); //will give{}
 


// using arrow =>
// const name=function () {
//     let myname="nikunjn"
//     console.log(this.myname);
//     //it will not print/undefined as line1
// }    
const name= () => {
    let myname="nikunjn"
    console.log(this.myname);
    //it will not print/undefined as line1
}  
//name()

// const add2 =(num1,num2) =>{
//     return num1+num2                                                             //it is explesitive as we use return
// }
//const add2 =(num1,num2) =>  num1+num2   //const add2 =(num1,num2) =>  (num1+num2) so it is implicitive

const add2 =(num1,num2) =>  ({user:"niku"})
console.log(add2(2,3));
