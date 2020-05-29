// Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
// Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc
const FasamImc = require('fasam-imc-calc');
var rs = require("readline-sync")
var peso = rs.questionFloat("Digite se peso")
var altura= rs.questionFloat("Digite sua altura")
const imc = new FasamImc(peso, altura); // peso, altura
 
console.log(imc.calc());
