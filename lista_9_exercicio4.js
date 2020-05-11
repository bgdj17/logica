var rs = require("readline-sync")
var num=rs.question("Digite o primeiro número.")
var num1= rs.question("Digite o segundo número. ")
function tabuadaMult(n){
    for(var i=1;i<=n; i++){
        var result= i*n
         console.log(`${n}x${i}=${result}`)
    }
}
tabuadaMult(num)