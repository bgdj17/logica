var rs = require("readline-sync")
var numA=[]
var numB=[]
var novoArray=[]
var nameA=rs.question("Digite seu nome, jogador A. ")
    for(var i= 0; i<3; i++){
        numA.push(rs.questionFloat("Nota: "))
        var jaExistenum =novoArray.includes(numA[i])
          if(jaExistenum !==true){
                novoArray.push(numA[i]) 
             }
    }

var nameB=rs.question("Digite seu nome, jogador B. ")
for(var i= 0; i<3; i++){
    numB.push(rs.questionFloat("Nota: "))
    var jaExistenum =novoArray.includes(numB[i])
          if(jaExistenum !==true){
                novoArray.push(numB[i]) 
          }
}

for(var i=0; i<3;i++){
    var result = numA[i]
   
    for(var count=0;count<10;count++){
        result = numA.includes(numB[count])
       if(result!==true){
           var jaExistenum =novoArray.includes(numB[count])
           if(jaExistenum !==true){
            novoArray.push(numB[count]) 
            }
       }      
        
    }
}


console.log(`Os números digitados por ${nameA} são: ${numA} `)
console.log(`Os números digitados por ${nameB} são: ${numB} `)
console.log(`Os números digitados são : ${novoArray}`)

