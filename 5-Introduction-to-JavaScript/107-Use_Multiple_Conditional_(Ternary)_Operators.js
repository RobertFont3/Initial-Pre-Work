/*used multiple ?? to simplify an if, else if, and else statement*/

function checkSign(num) {
  return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative"
}

checkSign(10);
