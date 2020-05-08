var fs = require("fs")
var rs = require("readline-sync")
var valorRaio= rs.questionInt("Digite o valor do RAIO para calcular o volume da esfera. ")
function calculoVolume(raio){
    return 4/3*3.14* (raio**3)/3
}
console.log(calculoVolume(valorRaio))


var valorRaioSerializado = JSON.stringify(valorRaio);
fs.writeFileSync(valorRaio, valorRaioSerializado)
