const arrr= [1,2,3,4,5]
//console.log(arrr[0]);
arrr.push(6)
// console.log(arrr);
//arr.pop()
//arrr.unshift(9)value addeded in starting
//arrr.shift() value removed from starting
// console.log(arrr.includes(9));
// console.log(arrr.indexOf(3));


// //slice vs splice
// const my1=arrr.slice(1,3)
// console.log(my1);
// console.log(arrr);//no change in original aray
// const my2=arrr.splice(1,3)
// console.log(my2);
// console.log(arrr);//array is cropped


//array2.0
const marvel=["thor","spider","iron"]
const dc=["flah","super","bat"]
//const all=marvel.concat(dc)
const all= [...arrr,...dc,...marvel]//known as spreading to join multiple array
console.log(all);
console.log(Array.from("Nikunj"));

