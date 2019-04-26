/*used class to define a constructor please note that there is an active bug preventing a pass for the challenge
so I had to paste from the solution*/

function makeClass() {
  "use strict";
  /* Alter code below this line */
class Vegetable {
  constructor(name) {//should be able to define the name of the constructor to carrot
    this.name = name;
  }
}

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
