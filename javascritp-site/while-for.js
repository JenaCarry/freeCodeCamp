// 1º EXEMPLO
const myArray = [];
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}

console.log(myArray);

// 2º EXEMPLO
const myArray2 = [];

for (let c = 1; c < 5; c++) {
  myArray2.push(c);
}

console.log(myArray2);

// 3º EXEMPLO
const myArray3 = [];

for (let num = 1; num <= 9; num += 2) {
  myArray3.push(num);
}

console.log(myArray3);

// 4º EXEMPLO
const myArray4 = [];

for (let v = 9; v > 0; v -= 2) {
  myArray4.push(v);
}

console.log(myArray4);

// 5º EXEMPLO
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total);
