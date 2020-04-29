var rs = require("readline-sync")
var n= rs.question("Informe a quantidade de Kw consumida.")
var kw= 1.49285
var kwreal= n*kw
var desconto= 0

if(n < 100){
    desconto = (kwreal*0.90) -kwreal
}
else{
    desconto =0
}

console.log("Total de consumo em kw: ", n,"kw")
console.log("Valor do kw: R$", kw)
console.log("Valor do consumo em Real:", "R$",kwreal)
console.log("Desconto: R$", desconto )
console.log("Valor total a pagar: R$", (desconto +kwreal))
