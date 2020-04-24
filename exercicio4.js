
var rs = require("readline-sync")

var num1 = rs.question("Qual a quantidade de maças?")
var result
if(num1 < 12){
    num1= parseFloat(num1)
    result =parseFloat(num1 * 0.30)
    console.log("Valor Total = R$ " + result.toFixed(2))
} 
else{
    num1= parseFloat(num1)
    result = parseFloat(num1 * 0.25)
    console.log("Valor Total = R$ " + result.toFixed(2))
}