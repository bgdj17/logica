// Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
// Para isso :
// Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
// inicialize as propriedades com estes valores.
// Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
// cor.
// Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
// e cor.
// Ao final o algoritmo deve comparar se os carro são iguais.
// Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.
var rs = require("readline-sync");
class Carro{
    constructor(nome, modelo, cor){
        this.nome = nome
        this.modelo = modelo
        this.cor = cor
     }    
}
var cadCarros = []
var qntCarrosNovos = 5
cadCarros.forEach((5) => {
nome =rs.question("Nome > ")
this.modelo =rs.question("Modelo > ")
this.cor =rs.question("Cor > ")
cadCarros.push(new Carro(this.nome, this.modelo, this.cor))

});

// for(var i = 0; i< qntCarrosNovos ; i++){
// var nome =rs.question("Nome > ")
// var modelo =rs.question("Modelo > ")
// var cor =rs.question("Cor > ")
// cadCarros.push(new Carro(nome, modelo, cor))
// }
console.log(cadCarros)