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

   var data = new Date
   console.log(sem[data.getDay()])
console.log(data.getFullYear())
console.log(data.getTime())

 const num3 = {}
 num3. nome = 'Igor'  A const não pode reatribuir, mas permite modificar ela.

*/

/* function h1click(){
    console.log('Executando função')
}
 */

function mudarTexto(i){
    let h1 = document.getElementById('titulo')

    h1.innerText = i.value
}
