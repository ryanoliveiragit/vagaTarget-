import { faturamento, mediaMensal } from "./values";

let contagemDiasMaiorMedia = 0;

faturamento.forEach((item) => {
  if (item.valor > mediaMensal) {
    contagemDiasMaiorMedia++;
  }
});

console.log(contagemDiasMaiorMedia);