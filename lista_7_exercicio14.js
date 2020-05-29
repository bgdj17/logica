// Faça um programa que receba uma string, o programa vai estar esperando uma data no
// formato dd/MM/yyyy onde :
// a. dd -> dia
// b. mm -> mês
// c. yyyy -> ano
// Utilize o método match() para fazer essa validação, você deverá utilizar um expressão
// regular para resolver este problema.
// Caso a data esteja valida o algoritmo deve imprimir :
// Entrada -> 22/05/2020
// O algoritmo imprime :
// Dia : 22
// Mes : 05
// Ano : 2020

var rs = require("readline-sync")
var recebeData = rs.question("Digite a data => ")
var procuraDigito= /\d/g
var data= recebeData.match(procuraDigito)
var separandoDia = data.splice(",", 2)
var separandoMes = data.splice(",",2)
var separandoAno = data.splice(",", 4)
var dia = separandoDia.join(",")
console.log(separandoAno)