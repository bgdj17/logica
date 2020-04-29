2
var rs = require("readline-sync")

var num1 = rs.question("Digite sua senha.")

if(num1 == 1234){
    console.log("Acesso Permitido.")
} 
else{
    console.log("Acesso Negado.")
}