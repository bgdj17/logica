var rs = require("readline-sync")
// /Faça um programa que pergunte ao usuário se ele quer adicionar ou apenas exibir,
// caso o usuário escolha adicionar, altere o programa inicial de cadastro de carro para
// que não salve 1 objeto carro e sim uma coleção de carros (utilizando arrays, em vez de
// serializar/deserializar o objeto será o array que possui os carros).
// Após cadastrar o carro o programa deve novamente solicitar o usuário se quer exibir ou
// adicionar, caso o usuário escolha exibir deve ser exibido todos os carros cadastrados.
var carros = []
with(!escolhaUser===false){
    var escolhaUser= rs.keyInYN("Deseja adicionar(Y) ou exibir(N)?")
    if(escolhaUser===true){
    carros.marca =rs.question("Digite a marca")
    carros.modelo =rs.question("Digite a modelo")
    carros.cor=rs.question("Digite a cor")
    }
}
console.log(carros)