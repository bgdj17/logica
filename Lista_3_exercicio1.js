var rs = require("readline-sync")

var num1 = rs.questionInt("Qual o valor do produto?")
var m1=10.00
var m2=0
var m3=0
var m4=5.00
var m5=0
var m6=100.00
var totalm= m1+m2+m3+m4+m5+m6
     if(totalm >=num1 ){
    console.log("Ok. Compra efetuada!")
     }
     else{
    console.log("Você não possui dinheiro suficiente para comprar o produto!")
     }

