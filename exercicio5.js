
var rs = require("readline-sync")

var num1= new Array()
for (var i = 0; i < 3; i++){
    num1 = rs.question("Qual o sua idade??")
}
var msn = num1.sort()
console.log(msn)