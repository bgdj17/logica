var rs = require("readline-sync")

var n= rs.question("Digite um número.")
if(n >= 100 && n <= 200){
    console.log("Você digitou um numero entre 100 e 200.")
} else{
    console.log("Você digitou um numero fora da faixa entre 100 e 200.")
}