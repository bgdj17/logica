var rs = require("readline-sync")
var n= rs.question("Digite o numero que sera convertido")
var q2 = rs.question("Você gostaria de converter graus em: \n a) Fahrenheit para Celsius\n b) Celsius para Fahrenheit")
if(q2== "b"){
    var a =(n*1.8) + 32
    console.log("O valor convertido em Fahrenheit é: "+ a)

}if(q2=="a"){
    var b =(n*9/5) + 32
    console.log("O valor convertido em Celsius é: "+ b)
}
