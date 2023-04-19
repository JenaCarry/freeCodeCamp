function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const array = rangeOfNumbers(startNum, endNum - 1);
    array.push(endNum);
    return array;
  }
}

console.log(rangeOfNumbers(1, 5));

function rangeOfNumbers2(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const array = rangeOfNumbers2(startNum, endNum - 1);
    array.push(endNum);
    return array;
  }
}

console.log(rangeOfNumbers2(1, 5));
