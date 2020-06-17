var rs = require('readline-sync')
var Sqlite = require('sqlite3')

var dadosDb =[]
var db = new Sqlite.Database("exercicio2.db", erro => {
    if (erro) {
        console.log(erro.message)
    }
    else {
        // db.run('CREATE TABLE carros (nome text, cor text, ano integer, valor integer)')
        console.log("Banco de dados conectado com sucesso!")
    }
})

var opcaoDeEntrada = 'entrada'
// while (opcaoDeEntrada !== "s") {
    opcaoDeEntrada = rs.question("Escolha uma das opções abaixo:\n(I) Inserir\n(D) Deletar\n(V)Visualizar\n(S)Sair ").toLowerCase()
//    Inserir dados
    if (opcaoDeEntrada == "i") {
        var nome = rs.question("Nome > ")
        var cor = rs.question("cor > ")
        var ano = rs.questionInt("ano > ")
        var valor = rs.questionInt("valor  > ")
        
        var recebeDados = 'SELECT * FROM carros'
        db.all(recebeDados,(erro, listaCarro)=>{
            if(erro){
                console.log(erro.message)
            }
            else{
                listaCarro.forEach(element => {
                    dadosDb.push(element.nome)
                    if(nome == element.nome){
                        console.log("Esse carro já existe!");}
                         
                    else{
                        var inserirDados = "INSERT INTO carros(nome, cor, ano, valor) VALUES (?,?,?,?)"
                        db.run(inserirDados, [nome, cor, ano, valor], erro => {
                            if (erro) {
                                console.log(erro.message)
                            }
                            else {
                                console.log("Dados Cadastrados com Sucesso!")
                            }
                        })
                
                    }
                });
              
            }
        })
    
       
    }
    // Deletar
    if(opcaoDeEntrada == 'd'){
    var deletarCarro = rs.question('Qual carro deseja excluir? ')
    var deletaDados = 'DELETE FROM carros WHERE nome=?'
    db.run(deletaDados, deletarCarro, (erro)=>{
        if(erro){
            console.log(erro.message)
        }
        else{
        console.log("Dados Deletados com sucesso!")
    }
    })
}
// Mostrar 
if(opcaoDeEntrada =='v'){
 recebeDados = 'SELECT * FROM carros'
        db.all(recebeDados,(erro, listaCarro)=>{
            if(erro){
                console.log(erro.message)
            }
            else{
                listaCarro.forEach(element => {
                    console.log(element)
                })
            }
            })
        }
// }