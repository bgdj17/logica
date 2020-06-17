// 1. Crie um algoritmo que solicite um número para o usuário e diga quantos carros mais
// potente que o valor informado.
// Para isso utiliza a propriedade “Horserpower” do cars.json
// DICA: função filter ou procure como contar quantos objetos tem x valor em uma lista no
// google.
var rs = require("readline-sync")
var fs = require('fs')
var json = fs.readFileSync("cars.json")
var carros = JSON.parse(json)
var pesquisaCarrosPotentes = rs.questionInt("Digite o valor para pesquisa >")
var resultadoPesquisaPCarrosPotentes = carros.filter((element)=>{
   return element.Horsepower > pesquisaCarrosPotentes
})
console.log(resultadoPesquisaPCarrosPotentes)