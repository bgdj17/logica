var media = (arr) => {
    var result = 0
    arr.forEach(element => {
        result = result + element
    });
    return result / arr.length
}
exports.calculoMedia = media
// ----------------------------------------------------
var calculaMediaIdadeAlunos = (cadAlunos)=>{
    var i= 0
    var resultado = 0
    cadAlunos.forEach((element, index) => {
        resultado = resultado + element.idade
        i = index + 1
    })
    return resultado/i
}
exports.calculaMediaIdadeAluno = calculaMediaIdadeAlunos
// --------------------------------------------------------------
