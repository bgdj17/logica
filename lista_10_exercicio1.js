var rs = require("readline-sync")
var fs= require("fs")

var carro = new Object()

carro.cor =rs.question("Digite a cor.")
carro.modelo =rs.question("Digite a modelo.")
carro.marca =rs.question("Digite a marca.")
console.log(carro)
console.log(carro.cor)
console.log(carro.modelo)
console.log(carro.marca)

var objSerializado = JSON.stringify(carro)
var caminhoArquivo = "carro.json"
fs.writeFileSync(caminhoArquivo, objSerializado)