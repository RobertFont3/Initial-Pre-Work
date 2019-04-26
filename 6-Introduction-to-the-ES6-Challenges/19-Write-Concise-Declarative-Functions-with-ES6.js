/*removed the function word to set a concise declarative*/const bicycle = {
  gear: 2,
  setGear(newGear) {//removed function
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
