// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// while (condition) {
    
// }
const arr=[1,2,3,4,5]
for (const num of arr) {         //if we use for in ,it will print index 0,1,2,3,4
    //console.log(num);
    
}
const greetings="helloworld"
for (const greet of greetings) {
    //console.log(greet);
    
}
const myobject={
    hero1:"batman",
    hero2:"spiderman"
}  //here we will use for in
for (const key in myobject) {
   // console.log(`${key} value is ${myobject[key]}`);
    
}
//for each
const coding=["js","ruby","java","python"]
// coding.forEach(function (val) {
//     console.log(val);
//     })
coding.forEach( (val)=>{
    //console.log(val);
    
})
//[{},{},{}]
const myCoding=[{filename:"java",
    ext:"java"
},{filename:"python",
    ext:"py"
},{filename:"javascript",
    ext:"js"
}]
myCoding.forEach( (item)=>{
    console.log(item.filename);
    
})
  