// 6. Faça um algoritmo que diga qual é o carro menos potente da lista cars.json.
// Utilize o campo Horsepower para descobrir qual é o menos potente
var rs = require("readline-sync")
var fs = require('fs')
var json = fs.readFileSync("cars.json")
var carros = JSON.parse(json)
var menorCarro = 230
var indice = 0
carros.filter((element, index)=> {
    if(element.Horsepower < menorCarro){
        menorCarro = element.Horsepower
        indice = index
     }
})
console.log("O carro menos potente é: ", carros[indice]) 