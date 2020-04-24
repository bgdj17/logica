2
var rs = require("readline-sync")

var num1 = rs.question("Digite seu no de nascimento.")

if(num1 >= "2004"){
    console.log("Você não pode votar")
} 
else{
    console.log("Você pode votar")
}