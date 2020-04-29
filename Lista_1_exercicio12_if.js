var rs = require("readline-sync")

    var name= rs.question("Qual o seu nome? ")
    var s= rs.question("Qual seu sexo F(Feminino) ou M(Masculino)? ")
    var m= rs.question("Qual o seu estacdo civil?")
    s = s.toUpperCase(s)
    m = m.toUpperCase(m)
    

if(m == "casada" && s == "F"){
    var y = rs.question("Quantos anos de casada?")
    console.log(name, ",sexo femino",",", m,"há", y, "anos")
}
 else{
    console.log(name,", sexo", s, ",", m)
}