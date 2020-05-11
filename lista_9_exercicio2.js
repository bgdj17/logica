var rs = require("readline-sync")
var numVer= rs.questionInt("Verifique se o valor é primo. Digite o número.  ")
function verificaNumPrimo(num){
    var cont= 0
    for(var i=0; i<100; i++){
        var test = num%i
        if(test === 0){
            cont = cont+ 1        
        }
    }
    if(cont>2){
        console.log("Esse umero não é primo")
    
    }else{
        console.log("Esse número é primo")
    }

}
verificaNumPrimo(numVer)
