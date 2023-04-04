import { invoicing } from "./values";

let highestValue = 0;

invoicing.forEach((item) => {
  if (item.valor > highestValue) {
    highestValue = item.valor;
  }
});

console.log(highestValue);