//did not clearly understand this lesson as it required an if statement in the answer and was unable to create code that I had not seen before as they again gave no clear examples of what they were looking for.


// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)) return myObj[checkProp]; // If true return the prop

  return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");
