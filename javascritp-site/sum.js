function sum(arr, n) {
  if (n === 0) {
    return 0;
  }
  return sum(arr, n - 1) + arr[n - 1];
}

const array = [1, 2, 3, 4, 5];

console.log(sum(array, array.length));

function somar(arr, n) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(somar(array, array.length));
