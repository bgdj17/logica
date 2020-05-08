var rs = require('readline-sync');
var quantosNumeros = rs.questionInt('Quantos numeros no seu array? ');
console.log('Digite os numeros para ordenar');
var numeros = [];
for (var i = 0; i < quantosNumeros; i++) {
    var numero = rs.questionInt('> ');
    numeros.push(numero);
}

while (true) {
    var houveTroca = false;
    for (var pivo = 0; pivo < numeros.length - 1; pivo++)    {
        var n1 = numeros[pivo];
        var n2 = numeros[pivo + 1];
        if (n1 > n2) {
            numeros[pivo] = n2;
            numeros[pivo + 1] = n1;
            houveTroca = true;
        }
    }
    if (!houveTroca) {
        break;
    }
}
console.log(numeros.join(' '));