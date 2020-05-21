var rs = require("readline-sync")
var frase = rs.question("Digite a frase desejada")
var cortarPalavra= frase.split(" ")
var palavra = cortarPalavra

// console.log("*".repeat(8))
// for (var i = 0; i < palavra.length; i++) {
// console.log(`*${palavra[i]}*`)}
// console.log("*".repeat(8))

while (true) {
    var verifica = false
    for (var i = 0; i <palavra.length-1 ; i++) {
        var palavra1 = palavra[i]
        var palavra2 = palavra[i + 1]
        if (palavra1.length > palavra2.length) {
            palavra[i] = palavra2
            palavra[i + 1] = palavra1
            verifica = true
        }
    }
    if (verifica == false) {
        break;
    }
}
var t = cortarPalavra.length
var unicoArr = palavra.slice(t-1,t)
unicoArr= unicoArr.toString()
var tam = unicoArr.length

console.log("*".repeat(tam+2))
for (var i = 0; i < palavra.length; i++) {

console.log(`*${palavra[i]}*`)}
console.log("*".repeat(tam+2))
console.log(tam)
palavra.toString()

