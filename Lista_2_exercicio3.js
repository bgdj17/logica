var rs = require("readline-sync")
var n= rs.question("Digite o DDI para saber o país")
if(n== "1"){
    console.log("Estados Unidos da América")
}
else if(n=="49"){
    console.log("Alemanhã")
}
else if(n=="54"){
    console.log("Agentina")
}
else if(n=="55"){
    console.log("Brasil")
}
else if(n=="35"){
    console.log("Portugal")
}
else{
    console.log("O DDI digitado não é válido.")
}