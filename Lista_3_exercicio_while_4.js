var rs = require("readline-sync")
var n = rs.questionInt("Digite um numero")
var i = 0
while(i<=n){
   if(i%2 == 0){
       console.log(i)
   }
    i++
}

