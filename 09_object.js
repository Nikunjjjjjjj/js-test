//object literal
const mysn=Symbol("key1")//[] is require for symbol
const juser={
    name:"Nikunj",
    "full name":"Nikunj Jain",
    [mysn]:"mykey1",  
    age:20,
    location:"noida",
    islogin:"false"

}
// console.log(juser.name);
// console.log(juser["name"]);
// console.log(juser["full name"]);
// console.log(juser[mysn]);


// juser.age=21
// console.log(juser);
// Object.freeze(juser)
// juser.location="ghaziabad"
// console.log(juser);

juser.greeting= function () {
    console.log("hihihihih");
    console.log(`hello,${this.name}`);
    
    
}
console.log(juser.greeting());
