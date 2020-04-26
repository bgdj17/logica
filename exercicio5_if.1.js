var rs = require("readline-sync")
var n1=rs.questionInt("Digite o primeiro número.")
var n2=rs.questionInt("Digite o segundo número.")
var n3=rs.questionInt("Digite o terceiro número.")

if(n1>n2 && n1>n3){
    if(n2>n3){
        Console.log(n3,n2,n1)
    }
}
if(n2>n1 && n2>n3){
    if(n3>n1){
        console.log(n1,n3,n2)
    }
}
if(n3>n1 && n3> n2){
    if(n1>n2){
        console.log(n2,n1,n3)
    }
}