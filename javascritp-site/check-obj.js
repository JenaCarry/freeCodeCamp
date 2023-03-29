function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

const products = {
  chocolate: 2,
  leite: 4,
  manteiga: 1,
  refrigerante: 4,
};

console.log(checkObj(products, "leite"));
console.log(checkObj(products, "pilha"));
