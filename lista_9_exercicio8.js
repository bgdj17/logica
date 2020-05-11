// Faça uma função que receba um número e retorne se é perfeito ou não.
// Após isso solicite ao usuário para inserir um número e imprimir se é perfeito ou não
// utilizando a função e imprimindo o resultado no final.
// OBS: Um número perfeito é aquele que a soma do seus divisores (auto excluindo) é
// igual a ele mesmo
// Exemplo 6 possui os seguintes divisores
// 1 + 2 + 3 = 6


var rs = require("readline-sync")
var num=rs.questionInt("Digite o número para saber se ele é perfeito. ")
function numPerfeito(n1){
    var result=0
    for(var i=1; i<n1; i++){
        var div= n1%i
        if(div===0){
            result= result + i
        }
    }
    if(result === n1){
        return console.log('Esse número é perfeito')
    }
    else{
        return console.log("Esse número não é perfeito")
    }
    

}
numPerfeito(num)
