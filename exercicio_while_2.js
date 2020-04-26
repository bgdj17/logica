var rs = require("readline-sync")

var n1 = rs.questionInt("Digite um numero")
var n2 = rs.questionInt("Digite um nUmero")
var i=0
var result=0
while(i < n1){
      result = result + n2;
        i++
    }
console.log('RESULTADO FINAL: ' + result)
