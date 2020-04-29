var rs = require("readline-sync")
var n1= rs.question("Digite o seu nome ")
var letra = n1.charAt(0)
if(n1 === letra.toUpperCase ){
    console.log("A primeira letra digitada é maiuscula!")
    }

else{
    console.log("A primeira letra digitada nao e maiuscula!")
}