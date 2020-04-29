var rs = require("readline-sync")
var op = rs.question("Escolha a opção A ou B")
var i= 0
var con = 0
while(op !== "a" && op !=="b" ){
    op = rs.question("Não entendi o comando. Por favor inserir A ou B")
}

if(op == "b"){
   
    n1 = rs.questionInt("Digite um número")
    n2 = rs.questionInt("Digite o segundo número")
    console.log(n1+n2)
    con = rs.question("Gostaria de realizar outro código?");
    
    while( con == "sim"){
        var n1 = rs.questionInt("Digite um número")
        n2 = rs.questionInt("Digite o segundo número")
        console.log(n1+n2)
        con = rs.question("Gostaria de realizar outro código?");
        
    }
    
}else{
    console.log("by!")
}