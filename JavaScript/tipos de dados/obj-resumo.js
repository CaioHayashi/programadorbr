
function obj(n, s) {
    this.nome = n
    this.sobrenome = s
}

var a = new obj('Caio', 'Oliveira')

console.log(a.sobrenome)