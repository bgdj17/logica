var rs = require("readline-sync")
var n = rs.questionInt("Digite um número.")
var i = n
while(i >=0){
   var resto = n % i
   if(resto ==0){
       console.log(i)
      
   }
  i--
}
