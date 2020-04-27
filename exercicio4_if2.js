var rs = require("readline-sync")
var n1= rs.questionFloat("Digite o valor do salario ")
var n2= rs.questionFloat("Digite o valor do emprestimo ")
var n3= rs.questionInt("Qual a quantidade de parcelas? ")
var vparcelas = n2/n3
var vaprovado = n1/100 *30
if(n1> 0 && n2>0){
    if(vparcelas > vaprovado)
    console.log("Seu emprestimo foi recusado, pois o valor maximo por parcela e de: "+ vaprovado)  
    else{
        console.log("Parabéns, seu emprestimo foi aprovado!")
    }
}
else{
    console.log("Um dos valores informado não é válido!")
}