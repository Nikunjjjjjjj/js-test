const name ="nikunj"//1st way to create
const age=20

//console.log(name+age+"value")rather than do this
console.log(`hello my name is ${name} and age is${age}`);
const game= new String('gtajbjbjbjb')  //another way to create string
// console.log(game[0]);
// console.log(name[0])
// console.log(game.__proto__);
// console.log(name.__proto__);
// console.log(game.length);
// console.log(game.toUpperCase());
console.log(game.charAt(1))

console.log(game.indexOf('t'));
//const newstring=game.substring(0,4) 
//trim to remove unwanted space
const url="https://nikunj.com/nikunj%20jain"
console.log(url.replace('%20',"-"));
console.log(url.includes('nikunj'));
console.log(url.split('/'))