// 10. Faça um programa que receba uma palavra e verifica se ela termina com “al” se termina
// com “al” então imprime a palavra se não imprime “palavra não identificada”.
// Utilize o método endsWith()

var rs = require("readline-sync")
var nome = rs.question("Digite uma palavra => ")
var verificar = nome.endsWith("al")
if(verificar==true){
    console.log(nome)
}
else{
    console.log("palavra não Identificada")

}