// 3. (OBRIGATORIO)Faça um algoritmo que receba um número de um episódio de
// Breaking Bad.
// Após isso o algoritmo deve imprimir o elenco de personagens e também de qual
// temporada é este episódio.
// Caso o episódio seja inválido dizer ao usuário que não existe este episódio.
// Utilize a api : https://www.breakingbadapi.com/api/episodes/{NUMERO_DO_EPISODIO}
// Exemplo episodio 10 : https://www.breakingbadapi.com/api/episodes/10
var rs = require("readline-sync")
const Axios = require("axios")
var numEpisodio = rs.questionInt("Qual o número do epsódio? ")
Axios.get(`https://www.breakingbadapi.com/api/episodes/${numEpisodio}`)
    .then((resposta) => {
        var result = resposta.data
        var elenco = result[0].characters
        var temporada = result[0].season
        console.log(`Elenco: ${elenco}, Temporada: ${temporada}`)
    })
    .catch((erro) => {
        if (erro.data == undefined) {
            console.log("Esse episodio não exite.")
        }
    })
