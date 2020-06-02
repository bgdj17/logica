var rs = require("readline-sync")
var axios = require("axios")
var pesquisaPokemon = rs.question("Digite o nome  ou numero do Pokemón > ")

axios.get(`https://pokeapi.co/api/v2/pokemon/${pesquisaPokemon}`)
.then((resposta)=>{
    // nome do Pokemón
    var pokeNome = resposta.data.name
    // habilidades do Pokemón
    var pokeHabilidades = resposta.data.abilities
    var habilidades =[]
    for (let i = 0; i < pokeHabilidades.length; i++) {
               habilidades.push(pokeHabilidades[i].ability.name)
    }
    // tipo
    var pokeTipo = resposta.data.types
    var tipo = []
    for(var i =0; i < pokeTipo.length; i++){
        tipo.push(pokeTipo[i].type.name)
    }
console.log(`Nome: ${pokeNome} Tipo: ${tipo}  Habilidade: ${habilidades}`)
    });
  
 