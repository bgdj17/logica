var rs = require("readline-sync")
var numBase=rs.questionInt("Digite o valor da base. ")
var numPotencia= rs.questionInt("Digite a potência. ")
function potencia(n1,n2){
return console.log(` O valor da potência é`, n1**n2)
}
potencia(numBase, numPotencia)
