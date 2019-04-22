//reviewed the difference between (==) and (===)

// Setup
function compareEquality(a, b) {
  if (a === b) { // Changed this line to strict equality
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
