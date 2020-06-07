// 4. Criar uma função que receba uma coleção de alunos e calcule a média de idade
// Adicione uma nova função no arquivo calcula-media.js chamada
// calculaMediaIdadeAluno(alunos).
// A função deve receber um array da mesma classe dos alunos criada na atividade 2.

// Após isso a função deve iterar pelos alunos e calcular a média de idade e retornar ela.
// Adicione essa função para ser exportado pelo módulo.
// Adicione no final do programa da atividade 2 após informar o nome dos alunos com
// maior idade também imprimir a média de idade dos alunos utilizando o método
// calculaMediaIdadeAluno(alunos)
var rs = require("readline-sync")
var cm = require("calcula-media")
var cadAlunos = []
var maior = 0
var alunoMaior = 0
var maiores =[]
class Alunos{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
     }
    }

for(var i =0; i<5; i++){
    var nome= rs.question("Digite o nome do aluno > ")
    var idade= rs.questionInt("Digite a idade do aluno > ")
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
console.log(`Alunos cadastrados: ${cadAlunos}`)
console.log("Alunos cadastrados: ",cadAlunos)
console.log("Os alunos mais velhos são: ", maiores)
var calculaMediaIdade = cm.calculaMediaIdadeAluno(cadAlunos)
console.log(`A média de idade da turma é : ${calculaMediaIdade}`)