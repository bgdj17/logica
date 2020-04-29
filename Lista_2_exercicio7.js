var rs = require("readline-sync")
var n= rs.question("Digite a senha")
if(n == "batatafrita"){
    console.log("ACESSO PERMITIDO")
}else{
    console.log("VOCE NÃO TEM ACESSO AO SISTEMA")
}
