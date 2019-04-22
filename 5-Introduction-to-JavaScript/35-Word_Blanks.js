//Took some time to understand the spacing necessary to create the complete sentence

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
result+= "My " +myAdjective+ " is very " +myNoun+ " and " +myVerb+ " very " +myAdverb+ ".";
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
