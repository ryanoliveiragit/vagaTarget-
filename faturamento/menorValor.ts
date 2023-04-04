import { faturamento } from "./values";

let menorValor = Infinity;

faturamento.forEach((item) => {
  if (item.valor > 0 && item.valor < menorValor) {
    menorValor = item.valor;
  }
});

console.log(menorValor);