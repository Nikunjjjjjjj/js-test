  //stack and heap
  let name1="niku"
  let name2=name1 //copy of name 1 is to name2 as it is in stack
  let user1={
    email:"nikunj@google.com",
    upi:"nj@ybl"

  }  //user 1 is object, info ill save in stack and get refernce
  //stack(primitive)and heap(non-primitive)
  let user2=user1 
//change in any result whole
user2.email="njwarrior"
console.log(user1);

