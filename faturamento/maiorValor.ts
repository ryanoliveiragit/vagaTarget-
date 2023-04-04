import { faturamento } from "./values";

let maiorValor = 0;

faturamento.forEach((item) => {
  if (item.valor > maiorValor) {
    maiorValor = item.valor;
  }
});

console.log(maiorValor);