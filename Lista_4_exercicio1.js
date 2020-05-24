// (OBRIGATÓRIO) Escreva um programa que pedirá para o usuário dois números entre 1
// e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre
// imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
// o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível
// por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o
// programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
// precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
// input do usuário de string para inteiro.
var rs = require("readline-sync")
var n1 = rs.questionInt("Digite o primeiro número de 1 à 100. ")
var n2 = rs.questionInt("Digite o segundo número de 1 à 100. . ")
if (n1 > n2) {
    while (n1 > n2) {
        if (n2 % 7 == 0) {
            console.log(n2, "Ping")
        }
        else if(n2 % 5==0){
            console.log(n2, "Pong")
        }
        
        else if (n2 % 7 == 0 && n1 % 5 == 0) {
            console.log(n1, "Ping Pong")

        } else {
            console.log(n1)
        }
        n2++
    }
} else {
    while (n2 > n1) {
        if (n1 % 7 == 0) {
            console.log(n2, "Ping")
        }
        if(n1 % 5==0){
            console.log(n2, "Pong")
        }

        if (n1 % 7 == 0 && n1 % 5 == 0) {
            console.log(n1, "Ping Pong")

        } else {
            console.log(n1)
        }
        n1++
    }
}