function welcome(name="niku") {
    console.log(`${name} welcome`);
    
}
welcome("nikunj")
function add2(num1,num2){
    return num1+num2
}
//console.log(add2(2,3))


//usingspread or rest
function shopingcart(...num1){
    return num1
}  
console.log(shopingcart(10,20,30,40,50));  //[ 10, 20, 30, 40, 50 ]
function shopingcart2(val1,val2,...num1){
    return num1
}  
console.log(shopingcart2(10,20,30,40,50));//[ 30, 40, 50 ]

//handle object
const user={
    username:"nikunj",
    age:20
}
function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
    
    
}
handleobject(user)