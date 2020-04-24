2
var rs = require("readline-sync")

var num1 = rs.question("Digite sua senha")

if(num1 == 1234){
    console.log("Esse número é paAcesso Permitido")
} 
else{
    console.log("Acesso Negado")
}