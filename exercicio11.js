var rs = require("readline-sync")

    var n1= rs.questionInt("Digite a 1ª nota.")
    var n2= rs.questionInt("Digite a 2ª nota.")
    var n3= rs.questionInt("Digite a 3ª nota.")
    var media = (n1 + n2 + n3) / 3
    console.log("Sua média aritmética é: " + media)
if(media >= 7 && media < 7){
    console.log("ALUNO APROVADO!")
} else{
    console.log("ALUNO REPROVADO!")
}