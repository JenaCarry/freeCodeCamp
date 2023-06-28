const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today, tomorrow } = HIGH_TEMPERATURES;

console.log(today);
console.log(tomorrow);

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

console.log(highToday);
console.log(highTomorrow);
