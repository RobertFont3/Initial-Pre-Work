//created a local function

function myLocalScope() {
  'use strict'; 
  var myVar = "abc";
  console.log(myVar);
}
myLocalScope();
