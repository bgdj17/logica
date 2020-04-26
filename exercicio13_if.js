var rs = require("readline-sync")

    var n= rs.questionFloat("Digite um némro. ")
    
if(n >0){
    var result = n*2
    console.log("O dobro do número digitado é: ", result)
}
 else{
     result = n *3
    console.log("O triplo do número digitado é: ",result)
}