// Faça uma programa que receba 4 notas e calcule a média e apresente ao usuário a
// média no final.
// Utilize o pacote : https://www.npmjs.com/package/median
var rs =require("readline-sync")
var nota =[]
var mediana = require("median")

for (let i = 0; i < 4; i++) {
     nota.push(rs.questionInt("Insira a nota ", i+1, ">"))
    }
     
    var valor= mediana(nota)
    console.log(valor)
