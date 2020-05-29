// Faça um algoritmo que receba um número e diga se ele é primo ou não
// Utilize o pacote : https://www.npmjs.com/package/prime-number
var rs = require("readline-sync")
const hePrimo = require ('prime-number')  
var num = rs.questionInt("Digite um número para saber se é primo. > ")

if(hePrimo(num)== true){
    console.log("Esse número é primo")
}
else{
    console.log("Esse número não é primo.")
}