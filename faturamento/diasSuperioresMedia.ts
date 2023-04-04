import { invoicing, monthlyAverage } from "./values";

let LargerDaysCount = 0;

invoicing.forEach((item) => {
  if (item.valor > monthlyAverage) {
    LargerDaysCount++;
  }
});

console.log(LargerDaysCount);