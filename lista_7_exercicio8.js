var rs = require("readline-sync")
var campos= rs.question('Digite os campos separados por ; ')
campos= campos.toLowerCase()
var arr= new Array()
arr = campos.split(";")


console.log(`A palavra digitada possui: \n ${arr} `)
