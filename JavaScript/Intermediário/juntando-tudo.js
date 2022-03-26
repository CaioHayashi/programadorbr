//Nome do aluno - nota 1 - nota 2 - media - Aprovado / Reprovado

var nomes = ['Caio', 'Maria', 'Joanna']
var notaA = [7.0, 5.4, 9.4]
var notaB = [8.8, 8.0, 6.4]

function media(n1,n2) {
    return (n1 + n2) / 2
}

function passou(media) {
    if (media > 7) {
        return 'aprovado'
    } else {
        return 'reprovado'
    }
}

for (var index in nomes){

    var a = notaA[index]
    var b = notaB[index]

    var m = media(a, b)

    console.log(`${nomes[index]} - nota A = ${a} - nota B = ${b} - média ${media(a, b)} = ${passou(m)}`)
}