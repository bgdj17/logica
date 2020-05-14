var rs = require("readline-sync")
var fs= require("fs")

var carro = new Object()

carro.cor =rs.question("Digite a cor.")
carro.modelo =rs.question("Digite a modelo.")
carro.marca =rs.question("Digite a marca.")
console.log(carro)



