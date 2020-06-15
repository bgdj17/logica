// 5. Faça um algoritmo que diga qual é o carro mais potente da lista cars.json.
// Utilize o campo Horsepower para descobrir qual é o mais potente
var rs = require("readline-sync")
var fs = require('fs')
var json = fs.readFileSync("cars.json")
var carros = JSON.parse(json)
var maiorCarro = 0
var indice = 0
carros.filter((element, index)=> {
    if(element.Horsepower > maiorCarro){
        maiorCarro = element.Horsepower
        indice = index
     }
})
console.log("O carro mais potente é: ", carros[indice]) 