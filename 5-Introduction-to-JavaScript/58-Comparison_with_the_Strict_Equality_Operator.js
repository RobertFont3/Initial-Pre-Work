//strict equality === will compair the types of values instead of trying to compair a type conversion

// Setup
function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
