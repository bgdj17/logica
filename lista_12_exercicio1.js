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
for(var i=0; i<2; i++){
nome =rs.question("Digite o nome do carro >").toLocaleLowerCase
modelo = rs.question("Digite o modelo > ").toLocaleLowerCase
cor = rs.question("Digite a cor >").toLocaleLowerCase
cadCarros.push(new Carro(nome, modelo, cor))
}
if(cadCarros[0].nome == cadCarros[1].nome && cadCarros[0].modelo == cadCarros[1].modelo){
    console.log("Esses carros são iguas")
}
else{
    console.log("Esses carros não são iguais")
}


