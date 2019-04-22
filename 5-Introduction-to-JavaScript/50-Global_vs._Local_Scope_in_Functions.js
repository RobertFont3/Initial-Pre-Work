//created a local variable to override a global variables

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";//overrides t-shirt
  return outerWear;
}

myOutfit();
