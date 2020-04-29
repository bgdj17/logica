var rs = require("readline-sync")
var n= rs.questionFloat("Informe o preco da etiqueta do produto.")
var n2= rs.questionInt("Escolha uma das opções de pagamento.\n 1. À vista em dinheiro ou cheque, recebe 10% de desconto \n 2. À vista no cartão de crédito, recebe 15% de desconto  \n 3. Em duas vezes, preço normal de etiqueta sem juros  \n 4. Em duas vezes, preço normal de etiqueta mais juros de 10%   ")

if(n2 ==1){
    desconto = (n*0.90) -n
    console.log("Opção escolhida: 1. A vista em dinheiro ou cheque, recebe 10% de desconto")
}
else if(n2==2){
    desconto = (n*0.85) -n
    console.log("Opção escolhida: 2. A vista no cartão de crédito, recebe 15% de desconto.")
}
else if(n2==3){
    desconto=0
    console.log("Opção escolhida: 3. Em duas vezes, preço normal de etiqueta sem juros.")
}
else if(n2==4){
    desconto= (n/100)*10
    console.log("Opção escolhida: 4. Em duas vezes, preço normal de etiqueta mais juros de 10%.")
    console.log("parcelas: 2 x", ((n+desconto)/2))
}

else{
console.log("Opção Invalida")
}
console.log("O valor a pagar é: R$",(n+desconto) )