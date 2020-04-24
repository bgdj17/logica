var rs = require("readline-sync")
var n1 = rs.questionInt("Digite um numero")
var n2 = rs.questionInt("Digite um nUmero")
var i=0
var result=1
while(i < n2){
      result = n1* result;
        i++
    }
console.log('RESULTADO FINAL: ' + result)

