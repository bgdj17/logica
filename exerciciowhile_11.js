var rs = require("readline-sync")
var n = rs.questionInt("Digite um número.")
var i =0
while(i<=10 && i>0){
 var result = n*i
      console.log(result)
  i++
}