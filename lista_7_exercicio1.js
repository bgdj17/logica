var rs = require("readline-sync")
var produtos= new Array()
var result =0
var qnt= rs.questionInt("Quantos produtos deseja cadastrar?")
for(var i= 0; i<qnt; i++){
produtos.push(rs.questionInt("Digite o preço do produto."))
result = result + produtos[i]
}
console.log(`O valor total é de: R$${result.toFixed(2)}`)
var pagamento = rs.questionFloat("Digite o valor do pagamento")
if(pagamento <result){
    console.log("O dinheiro dado é insuficiente. A compra será cancelada!")
} else if(pagamento > result){
    var troco = pagamento - result
    console.log(`Troco: R$ ${troco.toFixed(2)}`)
    console.log("Compra efetuada com sucesso.Obrigada!")
}else{
    console.log("Compra efetuada com sucesso.Obrigada!")
}
