// 2. Crie um algoritmo que conte quantos carros do Japan (Japão) existem na base
// cars.json
// O campo que define o país no cars.json é Origin
// A comparação da string pode ser utilizada usando a palavra “Japan”
var rs = require("readline-sync")
var fs = require('fs')
var json = fs.readFileSync("cars.json")
var carros = JSON.parse(json)
var resultadoPesquisaOrigin= carros.filter((element)=>{
   return element.Origin == "Japan"
})
console.log(resultadoPesquisaOrigin)