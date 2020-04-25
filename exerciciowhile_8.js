var rs = require("readline-sync")
var op = rs.question("Escreva uma palavra.")
var i =0
while(i < op.length){
    console.log(op.charAt(i))
    i++
}
