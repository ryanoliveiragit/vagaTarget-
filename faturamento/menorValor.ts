import { invoicing } from "./values";

let lowerValue = Infinity;

invoicing.forEach((item) => {
  if (item.valor > 0 && item.valor < lowerValue) {
    lowerValue = item.valor;
  }
});

console.log(lowerValue);