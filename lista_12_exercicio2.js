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
}
var maior = 0
var alunoMaior = 0
cadAlunos.forEach(aluno => {
    if (aluno.idade > maior) {
        maior = aluno.idade
        alunoMaior = aluno
    }
});
var alunosMaiores = cadAlunos.filter(aluno => {
   return maior <= aluno.idade
});
var mediaIdade = media.calculaMediaIdadeAluno(cadAlunos)
console.log("Alunos cadastrados", cadAlunos)
console.log("Alunos mais velhos: ", alunosMaiores)
console.log("A média de idade da turma é ", mediaIdade)

