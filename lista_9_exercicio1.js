var rs = require("readline-sync")
var valorRaio= rs.questionInt("Digite o valor do RAIO para calcular o volume da esfera. ")
function calculoVolume(raio){
    return (4*3.14* (raio*raio*raio))/3
}
console.log(calculoVolume(valorRaio))