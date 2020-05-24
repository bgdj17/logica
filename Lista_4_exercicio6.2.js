// Crie um programa que peça ao usuário o nome e a idade de n pessoas e os imprima na
// tela (EX.: “O nome digitado foi: Robson”.). O programa deve ser interrompido quando o
// usuário digitar o nome “Final”. No final, o programa deve imprimir o número de usuários
// que foram cadastrados no total.
var rs = require("readline-sync")
var cont = 0
while(name !== "Final"){
    var name = rs.question("Digite o nome > ")
    if(name== "Final"){
        break;
    }
    var age = rs.questionInt("Digite a idade >")
    if(name != "" && age > 0){
        cont = cont + 1
    }
    console.log("O nome digitado foi:", name, ", Idade: ", age)
}

console.log("O número de cadastro concluído foi de: ", cont, "usuários")