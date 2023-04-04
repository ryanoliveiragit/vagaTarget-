/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

*/

export const faturamentoMensal = [
    {
        state: 'SP',
        value: 67836.43,
    },
    {
        state: 'RJ',
        value: 36678.66,
    },
    {
        state: 'MG',
        value: 29229.88,
    },
    {
        state: 'ES',
        value: 27165.48,
    },
    {
        state: 'Outros',
        value: 19849.53
    },
]
function calcularTotalFaturado() {
    let totalMensal = 0;
  
    faturamentoMensal.forEach((item) => {
      totalMensal += item.value;
    });
  
    return totalMensal;
  }

function Percentual() {
    const totalMensal = calcularTotalFaturado();
    faturamentoMensal.forEach((item) => {
        const percentual = (item.value / totalMensal) * 100;
        console.log(`${item.state}: ${percentual.toFixed(2)}%`);
    });
}

Percentual()