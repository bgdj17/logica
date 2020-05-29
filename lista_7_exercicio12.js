// Faça um programa que receba uma palavra e diga se existe vogais ou não.
// Utilize o método indexOf()

var rs = require("readline-sync")
var palavra = rs.question("Digite uma palavra => ")
var vogais= ["a","e","i","o","u"]
var cont =0
for(var i= 0; i<vogais.length; i++){
var verificar = palavra.indexOf(vogais[i])
cont = cont+ verificar
}
if(cont>0){
    console.log("Existe vogal.")
}
else{
    console.log("Não existe vogal.")

}