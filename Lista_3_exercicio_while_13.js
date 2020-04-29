var rs = require("readline-sync")
var i =1
var soma =0
var imp=1
var num = 0
var rest = 0
while(i<=5){
num = rs.questionInt("Digite o "+ i +" numero.")
rest = num%2

if(rest==0){
    soma = soma+num
}
if(rest!=0){
    imp=imp*num
}
i++}    
console.log("Produto dos ímpares:"+ imp)
console.log("Soma dos pares:"+ soma)
