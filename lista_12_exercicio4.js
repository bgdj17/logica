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
var media = require("./calcula-media")

class Alunos {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}
var cadAlunos = []
var quantidadeCadastradoNovo = 3
for (var i = 0; i < quantidadeCadastradoNovo; i++) {
    var nome = rs.question("Digite o nome do aluno. ")
    var idade = rs.questionInt("Digite a idade. ")
    cadAlunos.push(new Alunos(nome, idade))
    };
console.log('Lista de alunos cadastrados:',cadAlunos)
var mediaIdade = media.calculaMediaIdadeAluno(cadAlunos)
console.log('A média de idade da turma é: ',mediaIdade)


   

