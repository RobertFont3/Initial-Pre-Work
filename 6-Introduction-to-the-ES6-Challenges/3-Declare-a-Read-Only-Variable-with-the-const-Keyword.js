/*learned how to declare a read only variable*/

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!"; /*the const will make the sentence read only*/
  for(let i = 0; i < str.length; i+=2) { /*the let will allow for the variable to change*/
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
