// 4. Faça um algoritmo que calcule a média de potência dos carros da Europe (Europa)
// Similar a atividade 2 porém usaremos o campo Origin para selecionar os carros da
// europa e depois disso aplicar a média em cima do campo Horsepower.
var rs = require("readline-sync")
var fs = require('fs')
var json = fs.readFileSync("cars.json")
var carros = JSON.parse(json)
var cont = 0
var soma = 0
var pesquisaCarroOrigin = carros.filter((element)=>{
 var forca = element.Horsepower
 var origin = element.Origin
      if(origin == "Europe"){
       soma = forca + soma
       cont = cont + 1
   }
})
console.log("A média de Força dos carros de Origin Europe é :", soma/cont)  