// Faça um programa que receba uma frase e troque a palavra ANTILOPE por um de seus
// nomes cientificos : Kobus ellipsiprymnus

var rs = require("readline-sync")
var palavra = rs.question("Digite uma palavra => ")
var substituicao = palavra.replace("antilope","Kobus ellipsiprymnus")
console.log(substituicao)