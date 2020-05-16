var rs = require("readline-sync")
class User{
    constructor(nome,sobrenome,idade, cpf){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.cpf = cpf
    }
}
class Especial extends User{
    constructor(salario){
        super("Especial", nome, sobrenome,idade,cpf, salario)
        this.muitoRico= 1000.00
    }
}
var cadastro= new User("Bruna", "Jesus","34", 10682758710)
var cadastroEspecial = new User("Clayson", "Pinto",52, 19000,00 )

console.log(cadastro)
console.log(cadastroEs)
replace()