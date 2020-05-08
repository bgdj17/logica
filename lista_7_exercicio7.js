var rs = require("readline-sync")
var palavra= rs.question('Digite a palavra. ')
palavra = palavra.toLowerCase()
var cons= "bcdfghjlmnpqrstvxz"
var vog = "aeiou"
var contCons= 0
var contVog =0

for(var i= 0; i < palavra.length;i++){
    if(cons.includes(palavra[i])){
           contCons= contCons+ 1
    } if(vog.includes(palavra[i])){
        contVog= contVog + 1}
}
console.log(`A palavra digitada possui: \n ${contCons} consoantes \n ${contVog} vogais `)
