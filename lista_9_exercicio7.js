var rs = require("readline-sync")
var num=rs.questionInt("Digite o número. ")

function valorAbsoluto(n1){
if(n1 <0){
    return console.log(` O valor absoluto é`,- n1)
}else{
    return console.log(` O valor absoluto é`, n1)
}
}
valorAbsoluto(num)
