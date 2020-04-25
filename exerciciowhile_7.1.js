var rs = require("readline-sync")

while(true){
    var op = rs.question("Escolha a opcao A(para Sair) ou B(Para realizar uma soma")
    op = op.toUpperCase()
    if(op == "A"){
        break;}
    
    else if(op == "B"){
        var n1= rs.questionInt("Digite o primeiro numero")
        var n2= rs.questionInt("Digite o segundo numero")
        console.log("A soma é", n1+n2)
    }
    else{ console.log("Não entendi")}

    }
console.log("By!")
