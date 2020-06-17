// Criar um módulo que calcule a média de uma coleção de números.
// Para isso crie um arquivo chamado calcula-media.js.
// No módulo exporte uma função media(arr) que recebe como argumento um array de
// números.
// A função deve iterar por esses números e retornar sua média.
// Após isso no arquivo da atividade importe o módulo criado e solicite ao usuário 3
// números, utilize o módulo criado para calcular a média e no final imprima o resultado
// para o usuário.
var rs = require("readline-sync")
var media = require('./calcula-media')
var arrNum = [rs.questionInt("Digite a primeira nota "), rs.questionInt("Digite a segunda nota "), rs.questionInt("Digite a terceira nota "),]
var resultadoMedia = media.calculoMedia(arrNum)
console.log("Média = ", resultadoMedia)