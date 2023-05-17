const magic = () => new Date().getFullYear();

console.log(magic());

const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

const increment = (number, value = 1) => number + value;

console.log(increment(1));
console.log(increment(1, 2));
