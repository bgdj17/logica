// 7. Faça um algoritmo que solicite ao usuário A ou B
// Caso o usuário escolha A
// O algoritmo deve imprimir toda informação do carro com maior aceleração
// Caso o usuário escolha B
// O algoritmo deve imprimir toda informação do carro com maior potência
// Se houver mais de um carro imprimir todos 1 por 1.
var rs = require("readline-sync")
var fs = require('fs')
var json = fs.readFileSync("cars.json")
var carros = JSON.parse(json)
var maiorPotencia = 0
var maiorAceleracao = 0
var indice = 0
var opcao = " "
opcao = rs.question("A - Carro com maior aceleração\n B - Carro com maior potência").toLocaleUpperCase()
if (opcao === "A") {
  carros.filter((element, index) => {
    if (element.Acceleration > maiorAceleracao) {
      maiorAceleracao = element.Acceleration
      indice = index
    }
  })
  carros.filter((element) => {
    if (maiorAceleracao == element.Acceleration) {
      console.log(element)
    }
  })
}

if (opcao === "B") {
  carros.filter((element, index) => {
    if (element.Horsepower > maiorPotencia) {
      maiorPotencia = element.Horsepower
      indice = index
    }
  })
  carros.filter((element) => {
    if (maiorPotencia == element.Horsepower) {
      console.log(element)
    }
  })
}
