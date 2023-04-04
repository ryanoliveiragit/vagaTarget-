/* 
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

*/

function reverseString(str: string) {
    let strInverted = "";
    for (let i = str.length - 1; i >= 0; i--) {
        strInverted += str[i];
    }
    return strInverted;
  }
  const phrase = prompt('Qual a frase?') as string;
  const invertedPhrase = reverseString(phrase);
  
  console.log(invertedPhrase);