//ternary operator = shortcut for an "if/else statement" takes 3 operands
//condition followed by "?", expression if true with ":", and expression if false
//condition ? experifTrue : expreifFalse





//function that will check a users age
//21 as an argument, uncomment code below

/*

let adult = checkAge(21);
//let's check if the age argument is >= 18
function checkAge(age) {
  
  //ususal way
  //if (age >= 18) {
  //  return true;
  //} else {
  //  return false;
  //}


  //with ternary operator with conditon followed by "?"
  return age >=18 ?
  //expression if true
  true : 
  //if not true write expression after colon
  false;

}
console.log(adult);

*/



//another example
//check to see if somebody won the game
//declare checkwinner function
function checkWinner(win){
  win ? console.log("you win!") : console.log("you lose!");
}
//change the parameter
checkWinner(true)

