var rs = require("readline-sync")

    var a= rs.questionInt("Digite um numero. ")
    var b= rs.questionInt("Digite o segundo numero. ")
    var div = a%b
if(div == 0){
    
    console.log("O numero ", b, "é divisor do numero", a)
}
 else{
    console.log("O numero ", b, "não é divisor do numero", a)
}