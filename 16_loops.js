//filter,map,reduce
//in for each return is not possible
const mynums=[1,2,3,4,5,6,6,7]
const newnums=[]
mynums.forEach( (item) => {
    if (item >5){
        newnums.push(item)
    }
});
//console.log(newnums);
//where as we can use filter 
const n = mynums.filter((item) => item>5)
//if we write in scope
const n1 = mynums.filter((item) => {
    return item>5})
//console.log(n);
// const userbook=books.filter(() =>{
//     return books.publicatin>500
// })

////map////////////
const mynumbers=[1,2,3,4,5,6,7,8,9,10]
//const newnumss= mynumbers.map((item) => item=item+10)
const newnumss= mynumbers.map((item) => item=item+10).map((item) => item=item*10).filter((item) => item >= 140)

//console.log(newnumss);

///////reduce   *****************

const mynumb =[1,2,3]
const mytotal=mynumb.reduce((accumulator,cureent_value) => accumulator+cureent_value,0);
console.log(mytotal);
