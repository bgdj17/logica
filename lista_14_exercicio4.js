// (OBRIGATÓRIO)Faça um algoritmo que receba uma CEP e diga qual é o endereço
// completo (Cidade, rua, estado) deste CEP.
// Utilize a API : https://api.postmon.com.br/v1/cep/{CEP}
// Exemplo CEP :https://api.postmon.com.br/v1/cep/89010020
var rs = require("readline-sync")
const Axios = require("axios")
var cep = rs.questionInt("Digite seu CEP ")
Axios.get(`https://api.postmon.com.br/v1/cep/${cep}`)
    .then((resposta) => {
        var result = resposta.data
        console.log(`Cidade: ${result.cidade}, Rua: ${result.logradouro}, Estado: ${result.estado} `)
    })