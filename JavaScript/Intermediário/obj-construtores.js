
function criarAluno(nome, n1, n2) {

    return {
        nome: nome, 
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2)/2
        }
    }
}

//OUTRA MANEIRA DE CRIAR UM OBJETO

// function alun(nome, n1, n2) {
//     this.nome = nome;
//     this.nota1 = n1;
//     this.nota2 = n2;

//     this.media = function() {
//         return (this.nota1 + this.nota2) / 2
//     }
// }

// var a = new alun('Igor', 8, 7)
// var a = new alun('Joao', 6, 8)

//console.log(a)
//console.log(a.media())

var turma = [
    criarAluno('Igor', 8, 9),
    criarAluno('José', 7 , 4.5),
    criarAluno('Marcela', 4, 6.4)
]



var aluno = turma[1]
//console.log(aluno)
//console.log(aluno.media())



/*
turma.forEach( function(elemento) {

    console.log(elemento)
})

 OUU DA FORMA QUAL JÁ VIMOS
*/


 for (var aluno of turma) {
     console.log(`${aluno.nome} - português: ${aluno.nota1} | matemática: ${aluno.nota2} - média: ${aluno.media()}`)
}
