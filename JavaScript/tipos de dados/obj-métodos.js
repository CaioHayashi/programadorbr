function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2
}
    
/* function calcMedia (n1, n2) {
        return (n1 * 2 + n2) / 2
} */
   
var aluno1 = {
    nome: 'Caio',
    notas: [5, 8],
    media: calcMedia
}

var aluno2 = {
    nome: 'Pedro',
    notas: [7, 4],
    media: calcMedia
}


console.log(aluno1.nome)
console.log(aluno1.media())



console.log(aluno2.nome)
console.log(aluno2.media())

calcMedia()