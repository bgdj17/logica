var rs = require("readline-sync")
var idade = []
for (var i = 1; i <= 5; i++) {
    idade.push(rs.questionInt("Digite a" +i+"º idade. " ))

}
while (true) {
  var  verifica = false
    for (let i = 0; i < idade.length-1; i++) {
        var n1 = idade[i]
        var n2 = idade[i + 1]
        if (n1 > n2) {
            idade[i] = n2
            idade[i+1] = n1
            verifica =true
        }
    }
if(verifica == false){      
        break;}
}

console.log(`A maior idade digitada foi ${idade[4]}`)

