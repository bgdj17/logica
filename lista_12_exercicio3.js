// Criar um módulo que calcule a média de uma coleção de números.
// Para isso crie um arquivo chamado calcula-media.js.
// No módulo exporte uma função media(arr) que recebe como argumento um array de
// números.
// A função deve iterar por esses números e retornar sua média.
// Após isso no arquivo da atividade importe o módulo criado e solicite ao usuário 3
// números, utilize o módulo criado para calcular a média e no final imprima o resultado
// para o usuário.
var rs = require("readline-sync")
var cmedia = require("./node_modules/calcula-media")
var numeros = [rs.questionInt("Digite um número > "), rs.questionInt("Digite um número > "), rs.questionInt("Digite um número > " )]
var calculoMedia = cmedia.calculaMedia(numeros)
console.log(calculoMedia)