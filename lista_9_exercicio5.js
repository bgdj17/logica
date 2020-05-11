var rs = require("readline-sync")
var num=rs.question("Digite o primeiro número. ")
var num1= rs.question("Digite o segundo número. ")
function maiorNum(n1,n2){
    if(n1>n2){
        console.log("O maior número é: ", n1)
        return n1
    }else{
        console.log("O maior número é: ", n2)
        return n2
    
    }
}
maiorNum(num,num1)
