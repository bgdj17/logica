// Faça um programa que vai receber duas entradas
// A primeira entrada é o cabeçalho (HEADER) ela vai possuir o seguinte formato
// campo1;campo2;campo3;campo4
// Onde se quebrarmos a string por ‘;’ teremos o seguinte array
// [0] campo1
// [1] campo2
// [2] campo3
// [3] campo4

var rs = require("readline-sync")
var campos = ""
var dados =""
var cont = 0
var quantidade = rs.questionInt('Digite a quantidade de campos que deseja inserir >')

while (cont<quantidade) {
    var campo = rs.question('Digite o nome do campo'+ (cont+1)+"> ")
    campos = campos + campo +";" 
    cont++
}

var arrCampos = campos.split(";")

for(var i =0; i<quantidade; i++){
    var dado = rs.question(`Insira ${arrCampos[i]}: `)
    dados = dados + dado +";" 
}

var arrDados = dados.split(";")

for (var i = 0; i < quantidade; i++) {
    console.log(`${arrCampos[i]}: ${arrDados[i]} `)
}
