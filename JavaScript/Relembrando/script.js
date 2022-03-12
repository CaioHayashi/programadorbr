/* 
Object 

[proriedade do objeto]

    var objeto = {               
        chave: 'valor', 
        chave: ['valor', 'valor']
    }

    console.log(objeto)
    ou
    console.log(objeto['chave'])
    ou
    console.log(objeto['chave'][1]) = valor 1
    
---------------------------------------------------------

    adicionando propriedade ao objeto:

    var objeto['chave'] = valor

    ou

    var novaChave = 'chave'
    aluno[novaChave] = valor

    ou

    objeto.chave = valor

   .forEach(function(element){
       console.log(element)
   })    
*/


function objNew(n, s){
    this.nome = n,
    this.sobrenome = s
}

a1 = new objNew('Caio', 'Hayashi')

console.log(a1)


function obj(n, s){
    return {
        nome: n,
        sobrenome: s
    }
}

aluno1 = obj('Coio', 'Hayashi')

console.log(aluno1)



var a = {
    nome: 'Caio',
    sobrenome: 'Hayashi'
}

console.log(a)