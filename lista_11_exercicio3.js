// Faça um algoritmo que receba um número e diga se ele é par ou ímpar
// Utilize o pacote : https://www.npmjs.com/package/is-odd
var rs = require("readline-sync")
const isOdd = require('is-Odd')
var num = rs.question("Digite um número para saber se é ímpar. > ")

if(isOdd(num)== true){
    console.log("Esse número é ìmpar")
}
else{
    console.log("Esse número é par")
}