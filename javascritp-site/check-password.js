function checkPassword(password, password_repeat) {
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const min = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const mai = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const simb = ["&", "$", "%", "§", "-", "_"];
  let numTr;
  let maiTr;
  let minTr;
  let simbTr;
  if (password === password_repeat && password.length >= 8) {
    for (let i = 0; i < num.length; i++) {
      if (password.indexOf(num[i]) !== -1) {
        numTr = true;
      }
    }
    for (let j = 0; j < mai.length; j++) {
      if (password.indexOf(mai[j]) !== -1) {
        maiTr = true;
      }
    }
    for (let c = 0; c < min.length; c++) {
      if (password.indexOf(min[c]) !== -1) {
        minTr = true;
      }
    }
    for (let s = 0; s < simb.length; s++) {
      if (password.indexOf(simb[s]) !== -1) {
        simbTr = true;
      }
    }
    if (numTr === true && maiTr === true && minTr === true && simbTr === true) {
      return true;
    }
  }
  return false;
}

console.log(checkPassword("Jean12345-", "Jean12345-"));
