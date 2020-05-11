var rs = require("readline-sync")

function perguntaIdade(){
var idade={}
idade.anos =rs.questionInt("Digite quantos anos vc tem ")
idade.meses =rs.questionInt("Digite o mês de nacimento.  ")
idade.dias =rs.questionInt("Digite o dia de nacimento. ")
return idade}

function idadeEmDias(obj){
    var anos = obj.anos*365
    var meses = obj.meses*30
    var dias= obj.dias
    var result = anos + meses + dias
    return result

}
console.log(idadeEmDias(perguntaIdade()))