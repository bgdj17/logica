// Faça um programa que permita o usuário cadastrar, deletar e ler carros.
// Cada carro vai conter as seguintes propriedades
// ● Nome (string)
// ● Cor (string)
// ● Ano (number)
// ● Valor (number)
const rs = require('readline-sync')
const Sqlite = require("sqlite3")
const db = new Sqlite.Database("exercicios.db", erro=>{
    if(erro){
        console.log(erro)
    }
    else{
        console.log("Conectado. Operação realizada com sucesso!")
        db.run('CREATE TABLE carros (nome string, cor string, ano number, valor number)');
    }
});
var opcao =rs.question("(I) para Inserir, (D)para Deletar, (L) para Ler .").toUpperCase()
if(opcao === "I"){
var nome = rs.question('Nome >')
var cor = rs.question('Cor >')
var ano = rs.questionInt('Ano >')
var valor = rs.question('Valor >')
var query = "INSERT INTO carros(nome, cor, ano, valor) VALUES (?,?,?,?)"
var trataErro = ((erro) =>{
    if(erro){
        console.log(erro.message)
    }
})
db.run(query,[nome, cor, ano, valor], trataErro)
}
function pesquisaCarro(){
    var ler = "SELECT * FROM carros" 
    db.all(ler,(erro, listaCarro)=>{
    if(erro){
        console.log(erro.message)
    }
    listaCarro.forEach(element =>{
        console.log(element)
    })
    })
}
if(opcao === "L"){
    pesquisaCarro()
}
function deletar(nome){
    var deletarCarro = 'DELETE FROM Carros WHERE nome=?'
    db.run(deletarCarro, nome, (erro)=>{
        if(erro){
            console.log(erro.message)
        }
        else{
        console.log("Dados Deletados com sucesso!")
    }
    })
}
if(opcao ==="D"){
    var opcaoDeletar = rs.question("Qual carro gostaria de deletar? ")
    deletar(opcaoDeletar)
}