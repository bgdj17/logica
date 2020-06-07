var rs = require("readline-sync")
var axios = require("axios")
var pesquisaPokemon = rs.question("Digite o nome  ou numero do Pokemón > ")

axios.get(`https://pokeapi.co/api/v2/pokemon/${pesquisaPokemon}`)
    .then((resposta) => {
        // nome do Pokemón
        var pokeNome = resposta.data.name
        // habilidades do Pokemón
        var pokeHabilidades = resposta.data.abilities
        var habilidades = []
        var habilidadesUrl = []
        var pokeDescHab = ''
        for (let i = 0; i < pokeHabilidades.length; i++) {
            habilidades.push(pokeHabilidades[i].ability.name)
            habilidadesUrl.push(pokeHabilidades[i].ability.url)
            axios.get(habilidadesUrl[i])
                .then((resposta) => {
                    pokeDescHab = resposta.data.effect_entries[1].effect
                    console.log(`${pokeDescHab}`)
                   
                })
        }


        // tipo
        var pokeTipo = resposta.data.types
        var tipo = []
        var tipoUrl =""
        var doubleDamageFromName = []
        var doubleDamageToResult = []
        var halfDamageFromResult = []
        var halfDamageToResult = []
        var noDamageFromResult = []
        var noDamageToResult = []
        for (var i = 0; i < pokeTipo.length; i++) {
            tipo.push(pokeTipo[i].type.name)
            tipoUrl = pokeTipo[i].type.url
            function retornaResultados(damage, arrayDamage){
                for(var i = 0 ; i< damage.length; i++){
                    arrayDamage.push(damage[i].name)                
                } return arrayDamage
            }
            axios.get(tipoUrl)
            .then((resposta)=>{
                // --------
                var doubleDamageFrom = resposta.data.damage_relations.double_damage_from
                for(var i = 0 ; i< doubleDamageFrom.length; i++){
                    doubleDamageFromName.push(doubleDamageFrom[i].name)                
                } 
                console.log(`DOUBLE DAMAGE FROM: ${doubleDamageFromName}`)
                // -------
                var doubleDamageTo = resposta.data.damage_relations.double_damage_to
                for(var i = 0; i< doubleDamageTo.length; i++){
                    doubleDamageToResult.push(doubleDamageTo[i].name)
                }
                console.log(`DOUBLE DAMAGE TO: ${doubleDamageToResult}`)
                // ------                
                var halfDamageFrom = resposta.data.damage_relations.half_damage_from
                for(var i = 0; i< halfDamageFrom.length; i++ ){
                    halfDamageFromResult.push(halfDamageFrom[i].name)
                }
                console.log(`HALF DAMAGE FROM:" ${halfDamageFromResult}`)
                // -------
                var halfDamageTo = resposta.data.damage_relations.half_damage_to
                for(var i = 0; i< halfDamageTo.length; i++ ){
                    halfDamageToResult.push(halfDamageTo[i].name)
                }
                console.log(`HALF DAMAGE TO: ${halfDamageToResult}`)
                // ------
                var noDamageFrom = resposta.data.damage_relations.no_damage_from
                console.log(`NO DAMAGE FROM: ${noDamageFrom}`)
                // ---
                var noDamageTo = resposta.data.damage_relations.no_damage_to
                console.log(noDamageTo)
            })
        }

        console.log(`NAME: ${pokeNome}, TYPE: ${tipo}, HAB: ${habilidades}`)
               
    });
    
