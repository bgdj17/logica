var rs = require("readline-sync")
var num = rs.questionInt("Digite o número")
var arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var arr2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19,]
var arr3 = []
var arr4 = []
var arr5 = []
function retornaNumParaArray(numInicial, numFinal, qualArray){
  for (var i = numInicial; i < numFinal; i++) {
    qualArray.push(i)
  }
}
retornaNumParaArray(1000, 10000, arr5)
retornaNumParaArray(100, 1000, arr4)
retornaNumParaArray(20, 100, arr3)

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
  }
}
function verArr2(num) {
  var n = num.toString()
  switch (n) {
    case '10': return "dez"; break;
    case '11': return "onze"; break;
    case '12': return "doze"; break;
    case '13': return "treze"; break;
    case '14': return "quatorze"; break;
    case '15': return "quinze"; break;
    case '16': return "dezesseis"; break;
    case '17': return "dezessete"; break;
    case '18': return "dezoito"; break;
    case '19': return "dezenove";
  }
}
function verArr3(num) {
    var n = num.toString()
    retornaDezena(n,2,"vinte")

function retornaDezena(n,n0, menssagem){
  if (n[0] == n0) {
        if (n[1] == 0) {
          return menssagem
        }
        if (n[1] !== 0) {
          return menssagem + verArr1(n[1])  
        }
}
}}
// 0 a 9
if (arr1.includes(num)) {
  console.log(verArr1(num))
}
// 10 a 19
 if (arr2.includes(num)) {
  console.log(verArr2(num))
}
// 20 a 99    
if (arr3.includes(num)) {
  console.log(verArr3(num))
}
//  100 a 999
if (arr4.includes(num)) {
  console.log(verArr4(num))
}
//  1000 a 9999
if (arr5.includes(num)) {
  console.log(verArr5(num))
}