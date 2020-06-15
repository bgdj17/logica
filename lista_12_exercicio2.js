// Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, se mais de
// um possuir maior idade apresentar o nome de todos os que possuem maior idade.
// Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade
// e inicialize essas variáveis nas propriedades do objeto.
// Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade.
// Crie o objeto do aluno e adicione em um array.
// Repita esse passo para os outros alunos.
// Ao final o algoritmo deve iterar pelo array de alunos e descobrir quais são os alunos
// com maior idade e imprimir seus nomes.
var rs = require("readline-sync");
class Alunos{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
     }
      getNome(){
          return this.nome
      }
      getIdade(){
          return this.idade
      }
}
var cadAlunos = []
var maior = 0
var alunoMaior = 0
var maiores =[]
for(var i =0; i<5; i++){
    var nome= rs.question("Digite o nome. ")
    var idade= rs.questionInt("Digite a idade. ")
    cadAlunos.push(new Alunos(nome, idade))
    if(cadAlunos[i].idade > maior)  {
        maior = cadAlunos[i].idade
        alunoMaior= cadAlunos.indexOf(cadAlunos[i])
       
    }
}
for(var i=0; i< cadAlunos.length; i++){
    if(maior <=cadAlunos[i].idade){
        maiores.push(cadAlunos[i])
    }
}

console.log("Alunos mais velhos: ", maiores)