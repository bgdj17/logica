var rs = require("readline-sync")
var fs= require('fs')
const { resolveSoa } = require("dns")
// Faça um programa que lê o arquivo carro.json utilizando a biblioteca e ‘fs’ para ler o
// arquivo e após isso utilize o método JSON.parse para deserializar o objeto em string.
// Após isso imprima os valores lidos do json do arquivo.
// OBS: altere o arquivo salve e rode o programa novamente e veja os dados sendo
// mudados a cada execução.
var caminhoObj = 'carro.json'
var objDeserializado = fs.readFileSync(caminhoObj)
var carro =JSON.parse(objDeserializado)
carro.cor = "vermelho"
carro.modelo ="Fusca"

console.log(carro)

var objSerializado = JSON.stringify(carro)
var caminhoArquivo = "carro.json"
fs.writeFileSync(caminhoArquivo, objSerializado)