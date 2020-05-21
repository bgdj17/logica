var rs = require("readline-sync")
var n1= rs.question("digite um número")
var i= 0
var mensagem=""
while(i<n1){
    mensagem = mensagem + "*"
    console.log(mensagem)
    i++
}