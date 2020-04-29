var rs = require('readline-sync');
for(;true;){
var n = rs.questionInt("Digite um numero para calculo fatorial")
var result= 1
for(var i= 1; i<=n;i++){
    result *= i;

}
console.log(result)
var q= rs.question("Você deseja continuar?\n S - Sim\n N - Nao ")
if(q == "N" ){
    break;
}
}



