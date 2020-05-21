var rs = require("readline-sync")
var frase = rs.question("Digite a frase desejada: ")
var cortarPalavra= frase.split(" ")
var maior=0
var menor=0
var num=0

for(var i=0; i<cortarPalavra.length; i++){
     if(cortarPalavra[i].length > maior){
        maior =cortarPalavra[i].length
    }  num = (maior - cortarPalavra[i].length)

}console.log("*".repeat(maior+2))
for(var i=0; i<cortarPalavra.length; i++){
    num = (maior - cortarPalavra[i].length)
    console.log(`*${cortarPalavra[i]}${" ".repeat(num)}*`)
}
console.log("*".repeat(maior+2))