// Faça um programa que receba um nome e imprima a terceira letra do nome.
// Utilize o método charAt() para esta atividade.

var rs = require("readline-sync")
var nome = rs.question("Digite seu nome => ")
console.log(nome.charAt(2))