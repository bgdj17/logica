
var rs = require("readline-sync");
class Alunos{
    constructor(nome, idade){
        this.nome =nome
        this.idade = idade
     }
      getIdades(){
         return this.idade
     }
}
var cadAlunos = []

for(var i =0; i<3; i++){
    var nome= rs.question("Digite o nome. ")
    var idade= rs.question("Digite a idade. ")
    cadAlunos.push(new Alunos(nome, idade))
}
var msn= cadAlunos.getIdades
console.log(msn)
