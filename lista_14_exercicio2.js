// 2. (OBRIGATORIO)Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e
// também seu autor
// Utilize a API : https://breaking-bad-quotes.herokuapp.com/v1/quotes
var rs = require("readline-sync")
const  Axios = require("axios")
Axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
.then((resposta)=>{
    var result = resposta.data
      console.log(result[0].quote)
      console.log("Author", result[0].author)
})