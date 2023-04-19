function binaryToDecimal(str) {
  return parseInt(str, 2);
}

console.log(binaryToDecimal("111000"));

function decimalToBinary(str) {
  return parseInt(str >>> 0).toString(2);
}

console.log(decimalToBinary("56"));
