/*swapped values in a deconstructuring array*/

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a,b] = [b,a];//could not find why a const was preventing from passing the challenge
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
