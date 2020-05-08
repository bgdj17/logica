var rs = require("readline-sync")
var numA=[]
var numB=[]
var novoArray=[]
var nameA=rs.question("Digite seu nome, jogador A. ")
var result =0
for(var i= 0; i<10; i++){
    numA.push(rs.questionFloat("Nota: "))
}
var nameB=rs.question("Digite seu nome, jogador B. ")
for(var i= 0; i<10; i++){
    numB.push(rs.questionFloat("Nota: "))}
for(var count=0; count<10;count++){
    result = numA.includes(numB[count])
       if(result!==true){
           novoArray.push(numB[count])
    }
}
console.log(`Os números digitados por ${nameA} são: ${numA} `)
console.log(`Os números digitados por ${nameB} são: ${numB} `)
console.log(`Os números que ${nameB} digitou diferente de ${nameA} são : ${novoArray}`)


