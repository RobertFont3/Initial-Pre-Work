//the logical and operator (&&) can remove the need to nest an operator inside the function and get the results for multiple things at concatenated

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) { //this will compare val to lesser than 50 and greater than 25
      return "Yes";
    }


  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
