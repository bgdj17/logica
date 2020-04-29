var rs = require('readline-sync');
var i=0
for(; i<5; i++){
var name= rs.question("Digite seu nome")
var n1= rs.question("Primeira nota")
var n2= rs.question("Segunda nota")
var med = ((n1*3) + (n2*7))/(3+7)
console.log("Sua média é: "+ med)
console.log(name)
}
