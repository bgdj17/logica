var rs = require("readline-sync")
var op = rs.question("Escreva uma palavra.")
var i = op.length
while(i >= 0){
    console.log(op.charAt(i))
    i--
}
