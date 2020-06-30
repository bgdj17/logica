const rs = require("readline-sync")
const axios = require("axios")
const fs = require('fs')
const pokeJson = require('./pokemon.json')

var pesquisaPokemon = rs.question("Digite o nome  ou numero do Pokemón > ")
var pokemon = {}

axios.get(`https://pokeapi.co/api/v2/pokemon/${pesquisaPokemon}`)
    .then((resposta) => {
        pokemon.nome = resposta.data.name
        pokemon.id = resposta.data.id
        var pokeHabilidades = resposta.data.abilities
        var habilidades = []
        var habilidadesUrl = []
        var pokeDescHab = ''
        for (let i = 0; i < pokeHabilidades.length; i++) {
            habilidades.push(pokeHabilidades[i].ability.name)
            pokemon.habilidades = habilidades
            habilidadesUrl.push(pokeHabilidades[i].ability.url)
            axios.get(habilidadesUrl[i])
                .then((resposta) => {
                    pokeDescHab = resposta.data.effect_entries
                    if (pokeDescHab[0].language.name == 'en') {
                        pokemon.descricaoHabilidades = pokeDescHab[0].effect
                    }
                    else {
                        pokemon.descricaoHabilidades = pokeDescHab[1].effect
                    }
                })
        }
        setTimeout(() => { console.log(`DESCRIÇÂO: ${pokemon.descricaoHabilidades}`) }, 500)
        // tipo
        var pokeTipo = resposta.data.types
        var tipo = []
        var tipoUrl = []
        var doubleDamageFromName = []
        var doubleDamageToResult = []
        var halfDamageFromResult = []
        var halfDamageToResult = []
        var noDamageFromResult = []
        var noDamageToResult = []
        for (var i = 0; i < pokeTipo.length; i++) {
            tipo.push(pokeTipo[i].type.name)
            pokemon.tipo = tipo
            tipoUrl.push(pokeTipo[i].type.url)

            axios.get(tipoUrl[i])
                .then((resposta) => {

                    var doubleDamageFrom = resposta.data.damage_relations.double_damage_from
                    doubleDamageFrom.forEach(element => doubleDamageFromName.push(element.name));
                    pokemon.doubleDamageFrom = doubleDamageFromName
                    console.log(`DOUBLE DAMAGE FROM: ${doubleDamageFromName}`)
                    // -------
                    var doubleDamageTo = resposta.data.damage_relations.double_damage_to
                    doubleDamageTo.forEach(element => doubleDamageToResult.push(element.name));
                    pokemon.doubleDamageTo = doubleDamageToResult
                    console.log(`DOUBLE DAMAGE TO: ${doubleDamageToResult}`)
                    // ------                
                    var halfDamageFrom = resposta.data.damage_relations.half_damage_from
                    halfDamageFrom.forEach(element => halfDamageFromResult.push(element.name));
                    pokemon.halfDamageFrom = halfDamageFromResult
                    console.log(`HALF DAMAGE FROM:" ${halfDamageFromResult}`)
                    // -------
                    var halfDamageTo = resposta.data.damage_relations.half_damage_to
                    halfDamageTo.forEach(element => halfDamageToResult.push(element.name));
                    pokemon.halfDamageTo = halfDamageToResult
                    console.log(`HALF DAMAGE TO: ${halfDamageToResult}`)
                    // ------
                    var noDamageFrom = resposta.data.damage_relations.no_damage_from
                    noDamageFrom.forEach(element => noDamageFromResult.push(element.name));
                    pokemon.noDamageFrom = noDamageFrom
                    console.log(`NO DAMAGE FROM: ${noDamageFrom}`)
                    // ---
                    var noDamageTo = resposta.data.damage_relations.no_damage_to
                    noDamageTo.forEach(element => noDamageToResult.push(element.name));
                    pokemon.noDamageTo = noDamageToResult;
                    console.log(`NO DAMAGE TO: ${noDamageToResult}`)

                })
        }
        console.log(`NAME: ${pokemon.nome}, TYPE: ${pokemon.tipo}, HABILIDADE: ${pokemon.habilidades}`)

        // setTimeout(() => { console.log(pokemon) }, 500)

    });
var opcao;
setTimeout(() => {
    opcao = rs.keyInYN('Você gostaria de salvar as informações desse Pokémon?')
    if (opcao) {
        salvarJson(pokemon)
    }
}, 1000);

function salvarJson(obj) {
    var objSerializado = JSON.stringify(obj)
    var caminhoArquivo = '/Users/bgdj1/projetos/logica/pokemon.json'
    fs.writeFileSync(caminhoArquivo, objSerializado);
}