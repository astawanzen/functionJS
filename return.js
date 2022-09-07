//return statement = returns a value back to the place where you invoked a function
//calculating rectangle area
let area;
let width;
let height;

width = window.prompt("enter width");
height = window.prompt("enter height");
//invoke the function with passing arguments
area = getArea(width, height);

//let's create function to calculate the rectangle with passing parameters
function getArea(width, height) {
  //send value back to the spot where we invoked the function we can use the return keyword
  //send/return the value of the calculation width * height to area
  return width * height;
}
console.log("the area result is:", area);
