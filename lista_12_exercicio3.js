// Criar um módulo que calcule a média de uma coleção de números.
// Para isso crie um arquivo chamado calcula-media.js.
// No módulo exporte uma função media(arr) que recebe como argumento um array de
// números.
// A função deve iterar por esses números e retornar sua média.
// Após isso no arquivo da atividade importe o módulo criado e solicite ao usuário 3
// números, utilize o módulo criado para calcular a média e no final imprima o resultado
// para o usuário.
var arrNum = [2,3,3,5,9]

function media(arr){
    var resultado = 0
    console.log(resultado)
     for(var i =0; i<= arr.length; i++){
        
        var resultado = resultado + arr[i]
        console.log(resultado)
    }
   }


var mediaArr = media(arrNum)
console.log(mediaArr)