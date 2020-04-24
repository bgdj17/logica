
var rs = require("readline-sync")

var num1 = rs.question("Digite o primeiro número.");
var num2 = rs.question("Digite o Segundo número.");

if(num1 > num2){
    console.log("O maior número digitado é " + (num1))
}
else if (num1 < num2) {
    console.log("O maior número digitado é " + (num2))
}
else{
    console.log("Os números digitados são iguais.")
}
