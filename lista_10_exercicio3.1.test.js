var rs = require("readline-sync")
var fs= require('fs')



carro.cor =rs.question("Digite a cor.")
carro.modelo =rs.question("Digite a modelo.")
carro.marca =rs.question("Digite a marca.")

var caminhoObj = 'carro.json'
var objDeserializado = fs.readFileSync(caminhoObj)
var carro =JSON.parse(objDeserializado)
console.log(carro)



while (true) {
    var houveTroca = false;
    for (var i = 0; i < numeros.length - 1; i++)    {
        var n1 = numeros[i];
        var n2 = numeros[i + 1];
        if (n1 > n2) {
            numeros[i] = n2;
            numeros[i + 1] = n1;
            houveTroca = true;
        }
    }
    if (houveTroca == false) {
        break;
    }
}