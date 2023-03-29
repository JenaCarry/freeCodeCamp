// 1º EXEMPLO
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

const entreeValue = testObj["an entree"];

const drinkValue = testObj["the drink"];

console.log(entreeValue);

// 2º EXEMPLO
const testNum = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

const playerNumber = 16;
const player = testNum[playerNumber];

// 3º EXEMPLO
const myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog["name"] = "Happy Coder";
