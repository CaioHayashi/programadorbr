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


var data = new Date ('08, 9 2010')
var sem = ['Dom', 'Seg' ,'Ter', 'Qua', 'Qui', 'Sex', 'Sab']


console.log(data)
console.log(sem[data.getDay()])
console.log(data.getFullYear())
console.log(data.getTime())