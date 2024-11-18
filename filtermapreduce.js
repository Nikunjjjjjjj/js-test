const arr=[5,1,3,2,6]


//map
const output = arr.map((x) => x*2)
console.log(output);

//filter
const output1= arr.filter((x) => x>4)
console.log(output1);

//reduce
const output2= arr.reduce((acumulator,curr) =>{
    acumulator=acumulator+curr
    //console.log("hi");
    return acumulator
},0)
console.log(output2);

const output3 = arr.reduce((acc, current) => {
    if (current > acc ) {
        acc = current;
    }
    return acc;
}, 0);
console.log(output3)

const users = [
    { firstName: "Alok", lastName: "Raj", age: 23 },
    { firstName: "Ashish", lastName: "Kumar", age: 29 },
    { firstName: "Ankit", lastName: "Roy", age: 29 },
    { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];
// Get array of full name : ["Alok Raj", "Ashish Kumar", ...]
const fullNameArr = users.map((user) => user.firstName + " " + user.lastName);
console.log(fullNameArr); // ["Alok Raj", "Ashish Kumar", ...]

////////////

// Get the count/report of how many unique people with unique age are there
// like: {29 : 2, 75 : 1, 50 : 1}
// We should use reduce, why? we want to deduce some information from the array. Basically we want to get a single object as output
const report = users.reduce((acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age] = ++ acc[curr.age] ;
    } else {
        acc[curr.age] = 1;
    }

    return acc;  //to every time return update object
}, {})
console.log(report) // {29 : 2, 75 : 1, 50 : 1}


////function chaining
const result =users.filter((user)=> user.age<30).map((user) => user.firstName)
console.log(result);

const result1= users.reduce((acc,curr) => {
    if (curr.age <30){
        acc.push(curr.firstName)
    }
    return acc;
},[])
console.log(result1);
