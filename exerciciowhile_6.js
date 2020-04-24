var rs = require("readline-sync")
var n1 = rs.questionInt("Insira 0 para sair ou qualquer outro número para continuar")
while(n1 > 0 || n1 < 0){
       n1= rs.questionInt("Insira 0 para sair ou qualquer outro número para continuara")       
}