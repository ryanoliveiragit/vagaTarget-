/* 
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

*/

function inverterString(str: string) {
    let strInvertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
      strInvertida += str[i];
    }
    return strInvertida;
  }
  const frase = prompt('Qual a frase?') as string;
  const fraseInvertida = inverterString(frase);
  
  console.log(fraseInvertida);