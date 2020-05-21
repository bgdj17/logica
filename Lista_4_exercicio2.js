// (OBRIGATÓRIO) Escreva um programa que passe por todos os números de 1 a 50 e
// para cada um deles imprima na tela se o número é par ou ímpar. Caso o número
// também seja primo, o programa deve dizer que ele é primo. (um número primo é um
// número que só é divisível por ele mesmo e por 1). Dica: Neste exercício você pode
// precisar de ajuda do operador MÓDULO (%). Você também pode precisar criar mais de
// um loop.
var num2 = 50
var i = 1
var cont = 0
var num1 = 1
while(num1< num2){
    cont=0
    var i=1
    while( i < num2) {
        if (num1 % i == 0) {
            cont= cont +1
        }i++
    }

    if (cont <= 2 && num1 % 2 == 0) {
         console.log(num1, "Esse número é primo e é par")
        }
    if (cont !== 2 && num1 % 2 == 0) {
            console.log(num1,"Esse número é par")
        }
    if (cont == 2 && num1 % 2 !== 0) {
        console.log(num1, "Esse número é primo e é ímpar")
        }
    if (cont !== 2 && num1 % 2 !== 0) {
        console.log(num1,"Esse número é ímpar")
    }
num1++
}
