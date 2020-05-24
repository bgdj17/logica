// Escreva um programa que simule uma partida de pedra papel e tesoura.
// Deve ser solicitado o nome do jogador A e do jogador B.
// Após isso o programa deve pedir a jogada do jogador A e a jogada do jogador B.
// No final o programa deve imprimir quem ganhou.
// Dicas:
// Papel ganha de pedra
// Tesoura ganha de papel
// Pedra ganha de tesoura
// Para não exibir a jogada do jogador utilize o comando de “password” no readline-syncvar
var rs = require("readline-sync")
var palavrasPermitidas = ["papel", "pedra","tesoura"]
var jogadorA = rs.question("Digite o nome do primeiro jogador >")
var jogadorB = rs.question("Digite o nome do segundo jogador >")


console.log(jogadorA, ", digite sua jogada:")
while(!palavrasPermitidas.includes(jogadaA) ){
var jogadaA = rs.question("PASSWORD: ", { hideEchoBack: true });
jogadaA= jogadaA.toLocaleLowerCase()
if(!palavrasPermitidas.includes(jogadaA)){
    console.log("Digite uma das palavras permitidas: Pedra, Papel ou Tesoura")
    }
}
console.log(jogadorB, ", digite sua jogada:")
while(!palavrasPermitidas.includes(jogadaB) ){
var jogadaB = rs.question("PASSWORD: ", { hideEchoBack: true });
jogadaB= jogadaB.toLocaleLowerCase()
if(!palavrasPermitidas.includes(jogadaB)){
    console.log("Digite uma das palavras permitidas: Pedra, Papel ou Tesoura")
    }
}

if (jogadaA === "papel" && jogadaB === "pedra") {
    console.log(jogadorA, ", você ganhou!!!!")
}
else if (jogadaA === "tesoura" && jogadaB === "papel") {
    console.log(jogadorA, ", você ganhou!!!!")
}
else if (jogadaA === "pedra" && jogadaB === "tesoura") {
    console.log(jogadorA, ", você ganhou!!!!")
}
else if(jogadaA === jogadaB){
    console.log("O jogo empatou!!!!")
}
else{
    console.log(jogadorB, ", você ganhou!!!!")
}
