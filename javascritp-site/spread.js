const arr = [1, 2, 3, 4, 5];
const maximum = Math.max.apply(null, arr);
console.log(maximum);

const max = Math.max(...arr);
console.log(max);

const spread = [...arr];
console.log(spread);

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1];
console.log(arr2);
