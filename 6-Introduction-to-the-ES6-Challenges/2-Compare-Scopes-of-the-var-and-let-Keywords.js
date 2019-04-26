/*learned about the difference in scope between let and var words
as let will be limited to the statement or block that it resides in where a var is global and can be updated to what you
dont want.*/



function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
   let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
