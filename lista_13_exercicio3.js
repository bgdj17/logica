// 3. Crie um algoritmo que conte quantos carros da Ford existem no cars.json.
// A resolução é similar ao exercício 1, porém utilize o método “includes” com parâmetros
// “Ford” na propriedade Car para realizar a contagem.
var rs = require("readline-sync")
var fs = require('fs')
var json = fs.readFileSync("cars.json")
var carros = JSON.parse(json)
var resultadoPesquisaP = carros.filter((element)=>{
   return element.Car.includes("Ford")
})
console.log(resultadoPesquisaP)