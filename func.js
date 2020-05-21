var rs = require("readline-sync")
var num = rs.questionInt("Digite o numero")

function verArr1(num) {
    var n = num.toString()
    switch (n) {
      case '0': return "zero"; break;
      case '1': return "um"; break;
      case '2': return "dois"; break;
      case '3': return "três"; break;
      case '4': return "quatro"; break;
      case '5': return "cinco"; break;
      case '6': return "seis"; break;
      case '7': return "sete"; break;
      case '8': return "oito"; break;
      case '9': return "nove"
    }}


function DevolveDezena(numero, n2, msn){
    numero = numero.toString()
    if(numero[0] == n2){
        if(numero[1]== 0){
            return msn 
        }
        
    }
}
function DevolveUnidade(numero, n2, msn){
    numero = numero.toString()
        if(numero[1]== n2){
            return msn + verArr1(numero[1])
        }
    
        }
        
    


var dezena = DevolveDezena(num, 2, "vinte")
var unidade = DevolveUnidade(num, 2, "vinte")

console.log(dezena)