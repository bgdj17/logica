2
var rs = require("readline-sync")

var num1 = rs.question("Digite um número")

if(num1 % 2 == 0){
    console.log("Esse número é par")
} 
else{
    console.log("Esse número é ímpar")
}