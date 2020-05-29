// Escolha um programa que você já fez em atividades passadas e faça o output do
// terminal ficar colorido com o pacote CHALK: https://www.npmjs.com/package/chalk
const giz = require('chalk') ;   
 


var rs = require("readline-sync")
var palavrasPermitidas = ["papel", "pedra","tesoura"]
var jogadorA = rs.question("Digite o nome do primeiro jogador >")
var jogadorB = rs.question("Digite o nome do segundo jogador >")


console.log(jogadorA, ", digite sua jogada:")
while(!palavrasPermitidas.includes(jogadaA) ){
var jogadaA = rs.question("Jogada: ", { hideEchoBack: true });
jogadaA= jogadaA.toLocaleLowerCase()
if(!palavrasPermitidas.includes(jogadaA)){
    console.log("Digite uma das palavras permitidas: Pedra, Papel ou Tesoura")
    }
}
console.log(jogadorB, ", digite sua jogada:")
while(!palavrasPermitidas.includes(jogadaB) ){
var jogadaB = rs.question("Jogada ", { hideEchoBack: true });
jogadaB= jogadaB.toLocaleLowerCase()
if(!palavrasPermitidas.includes(jogadaB)){
    console.log(giz.magenta("Digite uma das palavras permitidas: Pedra, Papel ou Tesoura"))
}
}

if (jogadaA === "papel" && jogadaB === "pedra") {
    console.log(giz.blue(jogadorA, ", você ganhou!!!!"))
}
else if (jogadaA === "tesoura" && jogadaB === "papel") {
    console.log(giz.magenta(jogadorA, ", você ganhou!!!!"))
}
else if (jogadaA === "pedra" && jogadaB === "tesoura") {
    console.log(giz.magenta(jogadorA, ", você ganhou!!!!"))
}
else if(jogadaA === jogadaB){
    console.log(giz.magenta("O jogo empatou!!!!"))
}
else{
    console.log(giz.magenta(jogadorB, ", você ganhou!!!!"))
}
