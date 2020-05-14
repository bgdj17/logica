var rs = require("readline-sync")
var fs= require('fs')



carro.cor =rs.question("Digite a cor.")
carro.modelo =rs.question("Digite a modelo.")
carro.marca =rs.question("Digite a marca.")

var caminhoObj = 'carro.json'
var objDeserializado = fs.readFileSync(caminhoObj)
var carro =JSON.parse(objDeserializado)
console.log(carro)
