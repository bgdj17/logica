var rs = require("readline-sync")
var i =1
var r = 0
while(i <=15){
    var num = rs.questionInt("Digite o "+ i +" numero.")
    r = r + num
        i++
}

console.log("A média é: "+ (r / 15))