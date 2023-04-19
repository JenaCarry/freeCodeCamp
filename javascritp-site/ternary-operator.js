function ternaryOperator(a, b) {
  return a === b ? "Equal" : "Not equal";
}

console.log(ternaryOperator(5, 5));

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10));
