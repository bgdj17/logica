// Escreva um programa que calcule a soma de todos os múltiplos de 3
// e de 5 entre 1 e 1000.
var n1= 1
var n2 =1000
var resultado =0
while(n1<=n2){
if(n1%3==0){
    console.log(n1)
    resultado = resultado + n1
}
n1++
}
console.log(`O resultado da soma dos multiplo de 3 é ${resultado}`)
