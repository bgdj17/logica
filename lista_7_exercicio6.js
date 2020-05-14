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
console.log(numeros.join(' '));