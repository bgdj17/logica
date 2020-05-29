// 11. Faça um programa que receba uma palavra e verifica se a palavra está cometendo o
// seguinte erro de português
// Antes de “p” ou “b” devemos usar M
// Caso a palavra esteja errada informar o erro
// Se não dizer que a palavra está certa.
// Utilize o método includes()

var rs = require("readline-sync")
var nome = rs.question("Digite uma palavra => ")
var verificar = nome.includes("np"||"nb" )
if(verificar==true){
    console.log("A palavra digitada está errada, pois antes de p e b só se um M")
}
else{
    console.log("A palavra está correta!")

}