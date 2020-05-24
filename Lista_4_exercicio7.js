// Escreva um programa que apresente quatro opções:
// (a) consulta saldo, (b) saque e (c) depósito e (d) sair.
// O saldo deve iniciar em R$ 0,00.
// A cada saque ou depósito o valor do saldo deve ser atualizado. Exemplo:
var rs = require("readline-sync")
var saldo=0
var saque=0
var deposito=0
while(opcao!="d"){
var opcao= rs.question("Digite a opção desejada:\n (a) consulta saldo, (b) saque e (c) depósito e (d) sair > ")
    if(opcao == "a"){
        console.log("Seu saldo atual é:", saldo)
    }
    if(opcao =="b"){
    saque = rs.questionInt("Qual o valor do saque? > ")
    saldo = saldo - saque
    console.log("Seu saldo atual é:", saldo)
    }
    if(opcao=="c"){
    deposito = rs.questionInt("Qual o valor do deposito? > ")
    saldo= saldo+deposito
    console.log("Seu saldo atual é:", saldo)
    }
}
