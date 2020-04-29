2
var rs = require("readline-sync")

var num1 = rs.question("Digite seu ano de nascimento para saber se voce pode votar.")

if(num1 >= "2004"){
    console.log("Você não pode votar!")
} 
else{
    console.log("Você pode votar!")
}