//learned how to chain together if else statements. This provided a lot of practice with chaining elements in java and where and why symbols are used.

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  }
}

// Change this value to test
testSize(14);
