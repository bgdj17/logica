var rs = require("readline-sync")
var num =[]
var name=[]
for(var i=0; i<2;i++){
     name.push(rs.question("Digite seu nome"))
        for(var count=0; count<5; count++){
        num.push(rs.question(name +", digite 5 numero de 1 a 10. "))
        console.log(num)
        }    }
        var numA = num.splice(0,5)
        var numB = num.splice(0,5)
        var nameA = name[0]
        var nameB = name[1]
    console.log(`Os numeros escolhidos por ${nameA} foram: ${numA}`)
    console.log(`Os numeros escolhidos por ${nameB} foram: ${numB}`)



// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// iguais que o jogador A e B colocaram.
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// 1,2,3

