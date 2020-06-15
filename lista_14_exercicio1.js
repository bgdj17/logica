// 1. (OBRIGATORIO)Solicite ao usuário para inserir yes ou no
// Após isso utilize a API https://yesno.wtf/api
// Esta api traz um dado aleatório yes ou no
// No final imprima se o usuário acertou ou não
var rs = require("readline-sync")
const  Axios = require("axios")
var input = rs.question("Escolha uma das opções: YES ou NO > ").toLowerCase()
if(input === "yes" || input === "no"){
Axios.get('https://yesno.wtf/api')
.then((resposta)=>{
    var result = resposta.data.answer
    if(result == input){
        console.log("Parabéns, Você acertou!")
    }
    else{
        console.log("Desculpa, Você errou!")
    }
    
    console.log("O resultado foi: ",result)
})
}
