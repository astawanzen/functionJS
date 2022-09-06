

//function = you define code once, and use it many times.
//to perform some code, call the function name.
//to create a function, simply type function and give it a unique function name

/*function myFunction(){
  console.log("data 1");
  console.log("data 2");
  console.log("data 3");
  console.log("data 4");
}
//to call the function simply type the function name with set of parentheses
myFunction();*/

//what if we have variables
//function can work with global variable
/*let userName = "your name";
let age = 21;

function myFunction(){
  console.log("data 1", userName);
  console.log("data 2", age);
  console.log("data 3");
  console.log("data 4");
}
//to call the function simply type the function name with set of parentheses
myFunction();*/

//how to pass local variable to another function
//you have to pass information ( parameter ) inside parentheses after calling a function

function startProgram() {
  //local variable
  let userName = "name";
  let age = 21;
  //passing/sending ARGUMENTS to the function
  myFunction(userName, age);
}
//passing/receive PARAMETER
function myFunction(userName, age) {
  console.log("data 1 name:", userName);
  console.log("data 2 age:", age);
  console.log("data 3");
  console.log("data 4");
}

startProgram();
//A parameter is the variable listed inside the parentheses in the function definition. An argument is the value that is sent to the function when it is called.
