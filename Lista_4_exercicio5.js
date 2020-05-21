// Crie um programa que peça o usuário n números e, quando o usuário digitar -1, imprima
// o maior e o menor, sem levar em consideração o -1
var rs = require("readline-sync")
var i =0
var num =0
var menor =0
var maior=0

while(num != -1){
    num= rs.questionInt("Digite o número > ")
    menor=num
    console.log(num)
  
    if(num > menor && num!=-1){
        maior= num
    }
    if(num<maior && num!=-1){
        menor=num
    }
    // menor= num
    // maior=num
}
console.log(`O maior número é ${maior} e o menor número é ${menor}`)