// Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.
// Utilize o pacote : https://www.npmjs.com/package/age-calculator
var ageCalculator = require('age-calculator');
  let {AgeFromDateString, AgeFromDate} = require('age-calculator');
 
  var rs = require("readline-sync")
  var dNascimento = rs.question("(Ano)(mês)(dia)0000-00-00 >")
  let ageFromDate = new AgeFromDate(new Date(dNascimento)).age;
  console.log("value from AgeFromDate", ageFromDate);
  