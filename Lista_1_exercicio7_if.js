
// área = b.h/2

var rs = require("readline-sync")

var altura= rs.question("Qual é sua altura?")
var genero = new Array("feminino","masculino")
var sexo = rs.keyInSelect(genero, "Qual é o seu sexo?")
var result = 0
if(genero =="feminino"){
    result = (62.1 * altura) -44.7
    console.log("Seu peso ideal é: " + result);
    }
    else{
        result = (72.7 * altura) - 58
        console.log("Seu peso ideal é: " + result);
    }
