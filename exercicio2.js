2
var rs = require("readline-sync")

var num1 = rs.question("Digite um número para saber se ele é PAR ou ÍMPAR")

if(num1 % 2 == 0){
    console.log("Esse número é par")
} 
else{
    console.log("Esse número é ímpar")
}